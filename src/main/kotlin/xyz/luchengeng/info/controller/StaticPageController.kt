package xyz.luchengeng.info.controller

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*
import xyz.luchengeng.info.entity.Type
import xyz.luchengeng.info.entity.User
import xyz.luchengeng.info.entity.UserType
import xyz.luchengeng.info.except.NotAuthorizedException
import xyz.luchengeng.info.service.StaticPageService
import xyz.luchengeng.info.service.AuthenticationService

@RestController
class StaticPageController  @Autowired constructor(private val staticPageService: StaticPageService, private val authenticationService: AuthenticationService){
    private fun ifIsAdmin(jwt: String,func:(user: User)->Unit){
        val user = authenticationService.tokenVerify(jwt)
        if(user.type === UserType.ADMIN){
            func(user)
        }else{
            throw NotAuthorizedException("Modifying Static Pages Not Allowed!!!")
        }
    }

    @PostMapping("/static/page/{title}/{id}")
    fun postStaticPage(@RequestHeader("x-api-key") token : String,@PathVariable id: Long, @RequestBody article: String, @PathVariable title: String) = ifIsAdmin(token){
        staticPageService.postStaticPage(id,article,title)
    }

    @GetMapping("/static/page/list")
    fun getStaticPageById() = staticPageService.getAllStaticPage()

    @PutMapping("/static/page/{id}")
    fun postStaticPage(@RequestHeader("x-api-key") token : String, @RequestBody article: String, @PathVariable id: Long) = ifIsAdmin(token){
        staticPageService.modStaticPageContent(id,article)
    }

    @GetMapping("/static/page/{id}")
    fun getStaticPageById(@PathVariable id : Long) = staticPageService.getStaticPageById(id)

    @GetMapping("/static/page/{id}/dto")
    fun getStaticPageDtoById(@PathVariable id : Long) = staticPageService.getStaticPageDtoById(id)

    @DeleteMapping("/static/page/{id}")
    fun delStaticPageById(@RequestHeader("x-api-key") token : String,@PathVariable id : Long) = ifIsAdmin(token){staticPageService.delStaticPage(id)}
    @PutMapping("/static/page/{id}/publish")
    fun publishPage(@PathVariable id: Long) =
            staticPageService.publishPage(id)
}