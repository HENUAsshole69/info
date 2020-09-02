package xyz.luchengeng.info.service

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Pageable
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import xyz.luchengeng.info.entity.*
import xyz.luchengeng.info.except.ConflictException
import xyz.luchengeng.info.except.NotAuthorizedException
import xyz.luchengeng.info.except.NotFoundException
import xyz.luchengeng.info.repo.ArticleRepo
import xyz.luchengeng.info.repo.StaticPageRepo
import java.time.LocalDateTime
import javax.annotation.PostConstruct


@Service
class StaticPageService @Autowired constructor(private val staticPageRepo: StaticPageRepo,private val contentService: ContentService) {
    fun postStaticPage(article: String,title: String)=
            staticPageRepo.save(
                    StaticPage(null,title,contentService.saveContent(article))
            )

    fun getAllStaticPage(): List<StaticPage> = staticPageRepo.findAll()

    fun delStaticPage(id : Long) = staticPageRepo.deleteById(id)

    @PostConstruct
    fun addStaticContent(){
        if(staticPageRepo.count() != 0L) return
        val emptyContent = "{\"ops\":[{\"insert\":\"\\n\"}]}"
        staticPageRepo.save(
                StaticPage(1,"艺术品介绍",contentService.saveContent(emptyContent))
        )
        staticPageRepo.save(
                StaticPage(2,"保存介绍",contentService.saveContent(emptyContent))
        )
        staticPageRepo.save(
                StaticPage(3,"海关监管",contentService.saveContent(emptyContent))
        )
        staticPageRepo.save(
                StaticPage(4,"展讯介绍",contentService.saveContent(emptyContent))
        )
        staticPageRepo.save(
                StaticPage(5,"拍卖厅介绍", contentService.saveContent(emptyContent))
        )
        staticPageRepo.save(
                StaticPage(6,"艺术银行",contentService.saveContent(emptyContent))
        )
    }

    fun modStaticPageContent(id : Long,article: String){
        val page = staticPageRepo.findByIdOrNull(id)?:throw NotFoundException("Static Page Not Found")
        contentService.delContent(page.article)
        page.article = contentService.saveContent(article)
        staticPageRepo.save(page)
    }

    fun getStaticPageById(id : Long) =
            contentService.getArticle((staticPageRepo.findByIdOrNull(id)?:throw NotFoundException("Static Page Not Found")).article)

    fun getStaticPageDtoById(id : Long) =
            staticPageRepo.findByIdOrNull(id)?:throw NotFoundException("Static Page Not Found")

}