package xyz.luchengeng.info.service

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Pageable
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import xyz.luchengeng.info.entity.Article
import xyz.luchengeng.info.entity.Type
import xyz.luchengeng.info.except.NotFoundException
import xyz.luchengeng.info.repo.ArticleRepo
import java.time.LocalDateTime


@Service
class ArticleService @Autowired constructor(private val articleRepo: ArticleRepo,private val contentService: ContentService) {
    fun postArticle(article: String,title: String)=
        articleRepo.save(
        Article(null,title, mutableListOf(),contentService.saveContent(article),LocalDateTime.now(),Type.NEWS,false)
        )

    fun postAntique(article: String,title: String)=
            articleRepo.save(
                    Article(null,title, mutableListOf(),contentService.saveContent(article),LocalDateTime.now(),Type.ANTIQUE,false)
            )

    fun postCover(id: Long,pic: ByteArray){
        val uuid = contentService.saveContent(pic)
        val article = articleRepo.findByIdOrNull(id)?:throw NotFoundException("Article Not Found")
        article.cover.add(uuid)
        articleRepo.save(article)
    }

    fun getArticleById(id : Long) =
            contentService.getArticle((articleRepo.findByIdOrNull(id)?:throw NotFoundException("Article Not Found")).article)


    fun getCoverById(id: Long,index: Int): ByteArray {
        val article = articleRepo.findByIdOrNull(id)?:throw NotFoundException("Article Not Found")
        if(index >= article.cover.size) throw NotFoundException("Said Cover Does Not Exist")
        return contentService.getPic(article.cover[index])
    }

    fun delArticle(id : Long){
        val article = (articleRepo.findByIdOrNull(id)?:throw NotFoundException("Article Not Found"))
        article.cover.forEach {
            contentService.delContent(it)
        }
        contentService.delContent(article.article)
        articleRepo.delete(article)
    }

    fun pageByTypeAndPublished(type: Type,published : Boolean,pageable: Pageable)=
            articleRepo.findByTypeAndPublished(type, published, pageable)

    fun pageByType(type: Type,pageable: Pageable)=
            articleRepo.findByType(type, pageable)
}