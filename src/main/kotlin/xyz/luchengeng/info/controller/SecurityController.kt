package xyz.luchengeng.info.controller

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageRequest
import org.springframework.data.repository.findByIdOrNull
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.*
import xyz.luchengeng.info.entity.Credential
import xyz.luchengeng.info.entity.UserType
import xyz.luchengeng.info.except.NotAuthorizedException
import xyz.luchengeng.info.service.SecurityService

@RestController
class SecurityController @Autowired constructor(private val securityService: SecurityService) {
    @GetMapping("/login")
    fun login(@RequestParam userName : String,@RequestParam password : String) : String {
        return securityService.login(userName, password)
    }

    @PostMapping("/register")
    fun register(@RequestBody credential: Credential){
        securityService.register(credential)
    }

    @GetMapping("/user")
    fun getUserObj(@RequestHeader("x-api-key") jwt : String)=
            securityService.auth("getUserObj",jwt)

    @PutMapping("/user/password/{userId}")
    fun updatePassword(@RequestHeader("x-api-key") jwt : String,@PathVariable userId : Long, @RequestParam password : String){
        val user = securityService.auth("updatePassword",jwt)
        when{
            user.type === UserType.ADMIN->{
                securityService.updatePassword(userId, password)
            }
            else->{
                if(userId != user.id) throw NotAuthorizedException("non admin user can only mod its own password")
                securityService.updatePassword(userId, password)
            }
        }
    }

}