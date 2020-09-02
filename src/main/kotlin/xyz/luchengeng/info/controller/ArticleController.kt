package xyz.luchengeng.info.controller

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Page
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.*
import xyz.luchengeng.info.entity.*
import xyz.luchengeng.info.except.NotFoundException
import xyz.luchengeng.info.service.ArticleService
import xyz.luchengeng.info.service.AuthenticationService
import java.time.LocalDateTime

@RestController
class ArticleController @Autowired constructor(private val articleService: ArticleService,private val authenticationService: AuthenticationService){
    @PostMapping("/article/page/type/{type}/published/{published}")
    fun getPageByTypeAndPublished(@PathVariable type : Type,@PathVariable published : Boolean,@RequestBody pageRequest : ApiPageRequest) =
        articleService.pageByTypeAndPublished(type,published,pageRequest.toPageRequest())

    @PostMapping("/article/page/type/{type}")
    fun getPageByType(@PathVariable type : Type,@RequestBody pageRequest : ApiPageRequest) =
            articleService.pageByType(type,pageRequest.toPageRequest())

    @PostMapping("/article/page/type/{type}/user")
    fun getPageByTypeAndUser(@RequestHeader("x-api-key") token : String, @PathVariable type : Type, @RequestBody pageRequest : ApiPageRequest): Page<ArticleDto> {
        val user = authenticationService.tokenVerify(token)
        return articleService.pageByTypeAndUser(type, user,pageRequest.toPageRequest())
    }

    @PostMapping("/article/page/type/{type}/subType/{subType}")
    fun getPageByTypeAndSubType( @PathVariable type : Type,@PathVariable subType : SubType, @RequestBody pageRequest : ApiPageRequest): Page<ArticleDto> {
        return articleService.getPageByTypeAndSubType(type,subType,pageRequest.toPageRequest())
    }

    @PostMapping("/article/{title}/registry/{registry}/value/{value}/type/{type}")
    fun getPageByRegistryAndWareHouseTypeAngValue(@RequestHeader("x-api-key") token : String, @PathVariable title : String,@PathVariable type : String,@PathVariable registry: String,@PathVariable value: String, @RequestBody article: String) {
        val user = authenticationService.tokenVerify(token)
        articleService.postArticle(user,article,title,registry,type,value)
    }

    @PostMapping("/article/{type}/{title}")
    fun postArticle(@RequestHeader("x-api-key") token : String,@RequestBody article: String,@PathVariable type : Type,@PathVariable title: String) {
        val user = authenticationService.tokenVerify(token)
        articleService.postArticle(user,article, title, type)
    }

    @PostMapping("/article/{type}/{subType}/{title}")
    fun postArticle(@RequestHeader("x-api-key") token : String,@RequestBody article: String,@PathVariable type : Type,@PathVariable subType : SubType,@PathVariable title: String) {
        val user = authenticationService.tokenVerify(token)
        articleService.postArticle(user,article, title, type,subType)
    }

    @PostMapping("/article/{id}/cover")
    fun postCover(@PathVariable id: Long,@RequestBody pic: ByteArray){
        articleService.postCover(id, pic)
    }
    @GetMapping("/article/{id}")
    fun getArticleById(@PathVariable id : Long) =
            articleService.getArticleById(id)

    @GetMapping("/article/{id}/dto")
    fun getArticleDtoById(@PathVariable id : Long) =
            articleService.getArticleDtoById(id)

    @GetMapping("/article/{id}/publish")
    fun publishArticle(@PathVariable id: Long) =
            articleService.publish(id)
    @GetMapping("/article/{id}/cover/{index}")
    fun getCoverById(@PathVariable id: Long,@PathVariable index: Int): ByteArray = articleService.getCoverById(id, index)
    @DeleteMapping("/article/{id}/cover")
    fun delCoverById(@PathVariable id: Long) = articleService.clearArticleCoverById(id)
    @DeleteMapping("/article/{id}")
    fun delArticle(@PathVariable id: Long)=articleService.delArticle(id)
    @PutMapping("/article/{id}")
    fun updateArticle(@RequestHeader("x-api-key") token : String,@PathVariable id: Long,@RequestBody article : String){
        val user = authenticationService.tokenVerify(token)
        return articleService.updateArticle(id,article,user)
    }
    @GetMapping("/headline")
    fun getHeadline() =
            articleService.getHeadline()
    @PostMapping("/article/{id}/headline")
    fun postHeadline(@PathVariable id: Long) =
            articleService.postHeadline(id)
    @DeleteMapping("/article/{id}/headline")
    fun delDeadline(@PathVariable id: Long) =
            articleService.delHeadline(id)
}