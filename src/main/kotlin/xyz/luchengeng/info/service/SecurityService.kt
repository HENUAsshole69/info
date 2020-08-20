package xyz.luchengeng.info.service

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import xyz.luchengeng.info.entity.Credential
import xyz.luchengeng.info.entity.User
import xyz.luchengeng.info.entity.UserType
import xyz.luchengeng.info.except.NotAuthorizedException
import xyz.luchengeng.info.except.NotFoundException
import xyz.luchengeng.info.repo.CredRepo
import xyz.luchengeng.info.repo.UserRepo
import java.awt.print.Pageable
import javax.annotation.PostConstruct


@Service
class SecurityService @Autowired constructor(private val authenticationService: AuthenticationService, private val credRepo: CredRepo, private val userRepo: UserRepo) {
    @PostConstruct
    private fun createAdminUser(){
        if(userRepo.count() == 0L){
            credRepo.save(Credential(null, User(id=null,type = UserType.ADMIN,name = "admin"),"admin"))

        }
    }

    fun auth(obj : String,token : String) : User{
        val user = authenticationService.tokenVerify(token)
        return user
    }
    fun login(userName : String,password : String) : String{
        val user = credRepo.findFirstByUserNameAndPassword(userName, password)?:throw NotAuthorizedException("UserName/Password Error")
        return authenticationService.tokenCreate(user.user)
    }

    fun setUserRole(userId : Long,type : UserType){
        val user = userRepo.findByIdOrNull(userId)?:throw NotFoundException("User Not Found")
        user.type = type
        userRepo.save(user)
    }

    fun getUserPage(pageable: org.springframework.data.domain.Pageable) =
        userRepo.findAll(
                pageable
        )

    fun searchUser(keyWord : String,pageable: org.springframework.data.domain.Pageable) =
            userRepo.findUserByName(keyWord, pageable)


    fun updatePassword(userId : Long,password: String){
        val cred = credRepo.findCredByUserId(userId)?:throw NotFoundException("Credential Not Found")
        cred.password = password
        credRepo.save(cred)
    }

    fun register(cred : Credential) : Credential {
        cred.user.type = UserType.INDIVIDUAL
        return credRepo.save(cred)
    }
}