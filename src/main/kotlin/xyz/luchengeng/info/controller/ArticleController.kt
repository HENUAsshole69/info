package xyz.luchengeng.info.controller

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.*
import xyz.luchengeng.info.entity.ApiPageRequest
import xyz.luchengeng.info.entity.Article
import xyz.luchengeng.info.entity.Type
import xyz.luchengeng.info.except.NotFoundException
import xyz.luchengeng.info.service.ArticleService
import java.time.LocalDateTime

@RestController
class ArticleController @Autowired constructor(private val articleService: ArticleService){
    @PostMapping("/article/page/type/{type}/published/{published}")
    fun getPageByTypeAndPublished(@PathVariable type : Type,@PathVariable published : Boolean,@RequestBody pageRequest : ApiPageRequest) =
        articleService.pageByTypeAndPublished(type,published,pageRequest.toPageRequest())

    @PostMapping("/article/page/type/{type}")
    fun getPageByType(@PathVariable type : Type,@RequestBody pageRequest : ApiPageRequest) =
            articleService.pageByType(type,pageRequest.toPageRequest())

    @PostMapping("/article/{title}")
    fun postArticle(@RequestBody article: String,@PathVariable title: String)=articleService.postArticle(article, title)
    @PostMapping("/antique/{title}")
    fun postAntique(@RequestBody article: String,@PathVariable title: String)=
            articleService.postAntique(article, title)
    @PostMapping("/article/{id}/cover")
    fun postCover(@PathVariable id: Long,@RequestBody pic: ByteArray){
        articleService.postCover(id, pic)
    }
    @GetMapping("/article/{id}")
    fun getArticleById(@PathVariable id : Long) =
            articleService.getArticleById(id)
    @GetMapping("/article/{id}/cover/{index}")
    fun getCoverById(@PathVariable id: Long,@PathVariable index: Int): ByteArray = articleService.getCoverById(id, index)
    @DeleteMapping("/article/{id}")
    fun delArticle(@PathVariable id: Long)=articleService.delArticle(id)
}