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
    fun postStaticPage(id: Long,article: String,title: String)=
            staticPageRepo.save(
                    StaticPage(id,title,contentService.saveContent(article))
            )

    fun getAllStaticPage(): List<StaticPage> = staticPageRepo.findAll()

    fun delStaticPage(id : Long) = staticPageRepo.deleteById(id)

    @PostConstruct
    fun addStaticContent(){
        if(staticPageRepo.count() != 0L) return
        val emptyContent = "{\"ops\":[{\"insert\":\"\\n\"}]}"
        staticPageRepo.save(
                StaticPage(2,"仓储介绍",contentService.saveContent(emptyContent))
        )
        staticPageRepo.save(
                StaticPage(3,"海关监管",contentService.saveContent(emptyContent))
        )

        staticPageRepo.save(
                StaticPage(5,"拍卖厅介绍", contentService.saveContent(emptyContent))
        )
        staticPageRepo.save(
                StaticPage(6,"艺术银行",contentService.saveContent(emptyContent))
        )
        staticPageRepo.save(
                StaticPage(7,"社会文物登记服务中心",contentService.saveContent(emptyContent))
        )
        staticPageRepo.save(
                StaticPage(8,"离退+电商",contentService.saveContent(emptyContent))
        )
        staticPageRepo.save(
                StaticPage(9,"艺术品托管平台",contentService.saveContent(emptyContent))
        )
        staticPageRepo.save(
                StaticPage(10,"信息公开",contentService.saveContent(emptyContent))
        )
        staticPageRepo.save(
                StaticPage(11,"关于我们",contentService.saveContent(emptyContent))
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