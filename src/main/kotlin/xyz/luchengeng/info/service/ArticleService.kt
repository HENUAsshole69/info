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
import java.time.LocalDateTime
import javax.annotation.PostConstruct


@Service
class ArticleService @Autowired constructor(private val articleRepo: ArticleRepo,private val contentService: ContentService) {
    fun postArticle(user: User,article: String,title: String,type: Type)=
        articleRepo.save(
        Article(null,title, mutableListOf(),contentService.saveContent(article),LocalDateTime.now(),type,false,false,null,null,null,user)
        )

    fun postArticle(user: User,article: String,title: String,type: Type,subType : SubType)=
            articleRepo.save(
                    Article(null,title, mutableListOf(),contentService.saveContent(article),LocalDateTime.now(),type,false,false,null,null,null,user,subType = subType)
            )

    fun postArticle(user: User,article: String,title: String,registry: String,wareHouseType: String,value: String)=
            articleRepo.save(
                    Article(null,title, mutableListOf(),contentService.saveContent(article),LocalDateTime.now(),Type.TAX_FREE,false,false,registry, value, wareHouseType, user)
            )

    fun postCover(id: Long,pic: ByteArray){
        val uuid = contentService.saveContent(pic)
        val article = articleRepo.findByIdOrNull(id)?:throw NotFoundException("Article Not Found")
        article.cover.add(uuid)
        articleRepo.save(article)
    }

    fun getArticleById(id : Long) =
            contentService.getArticle((articleRepo.findByIdOrNull(id)?:throw NotFoundException("Article Not Found")).article)

    fun getArticleDtoById(id : Long) =
            ArticleDto((articleRepo.findByIdOrNull(id)?:throw NotFoundException("Article Not Found")))

    fun getCoverById(id: Long,index: Int): ByteArray {
        val article = articleRepo.findByIdOrNull(id)?:throw NotFoundException("Article Not Found")
        if(index >= article.cover.size) throw NotFoundException("Said Cover Does Not Exist")
        return contentService.getPic(article.cover[index])
    }

    fun clearArticleCoverById(id: Long){
        val article = articleRepo.findByIdOrNull(id)?:throw NotFoundException("Article Not Found")
        article.cover.forEach {
            contentService.delContent(it)
        }
        article.cover.clear()
        articleRepo.save(article)
    }

    fun delArticle(id : Long){
        val article = (articleRepo.findByIdOrNull(id)?:throw NotFoundException("Article Not Found"))
        article.cover.forEach {
            contentService.delContent(it)
        }
        contentService.delContent(article.article)
        articleRepo.delete(article)
    }

    fun publish(id: Long){
        val article = (articleRepo.findByIdOrNull(id)?:throw NotFoundException("Article Not Found"))
        if(article.published) throw ConflictException("Article already published")
        article.published = true
        articleRepo.save(article)
    }

    fun pageByTypeAndPublished(type: Type,published : Boolean,pageable: Pageable)=
            articleRepo.findByTypeAndPublished(type, published, pageable)

    fun pageByType(type: Type,pageable: Pageable)=
            articleRepo.findByType(type, pageable)

    fun pageByTypeAndUser(type: Type,user: User,pageable: Pageable)=
            articleRepo.findByTypeANdUser(type,user, pageable)

    fun updateArticle(id: Long,a: String,user : User){
        val article = (articleRepo.findByIdOrNull(id)?:throw NotFoundException("Article Not Found"))
        if(user.type != UserType.ADMIN)
            if(article.user?.id !== user.id) throw NotAuthorizedException("")
        contentService.delContent(article.article)
        article.article = contentService.saveContent(a)
        articleRepo.save(article)
    }

    fun postHeadline(id : Long){
        val article = (articleRepo.findByIdOrNull(id)?:throw NotFoundException("Article Not Found"))
        article.headline  = true
        articleRepo.save(article)
    }
    fun delHeadline(id : Long){
        val article = (articleRepo.findByIdOrNull(id)?:throw NotFoundException("Article Not Found"))
        article.headline = false
        articleRepo.save(article)
    }
    fun getHeadline()=
            articleRepo.findHeadline()

    fun getPageByTypeAndSubType(type: Type,subType: SubType,pageable: Pageable) = articleRepo.findByTypeAndSubType(type,subType,true,pageable)
}