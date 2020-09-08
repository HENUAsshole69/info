package xyz.luchengeng.info.repo

import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository
import xyz.luchengeng.info.entity.*

@Repository
interface ArticleRepo: JpaRepository<Article,Long>{
    @Query("select new xyz.luchengeng.info.entity.ArticleDto(a) from Article a where a.type = ?1 and a.published = ?2 order by case when a.top = true then 1 else 0 end desc,a.time desc ",countQuery = "select count(a) from Article a where a.type = ?1 and a.published = ?2")
    fun findByTypeAndPublished(type: Type,published: Boolean,pageable: Pageable) : Page<ArticleDto>

    @Query("select new xyz.luchengeng.info.entity.ArticleDto(a) from Article a where a.type = ?1 and a.subType = ?2 and a.published = ?3",countQuery = "select count(a) from Article a where a.type = ?1 and a.subType = ?2 and a.published = ?3")
    fun findByTypeAndSubType(type: Type,subType : SubType,published: Boolean,pageable: Pageable) : Page<ArticleDto>

    @Query("select new xyz.luchengeng.info.entity.ArticleDto(a) from Article a where a.type = ?1",countQuery = "select count(a) from Article a where a.type = ?1")
    fun findByType(type: Type,pageable: Pageable) : Page<ArticleDto>
    @Query("select new xyz.luchengeng.info.entity.ArticleDto(a) from Article a where a.headline = true",countQuery = "select count(a) from Article a where a.headline = true")
    fun findHeadline() : List<ArticleDto>
    @Query("select new xyz.luchengeng.info.entity.ArticleDto(a) from Article a where a.type = ?1 and a.user = ?2",countQuery = "select count(a) from Article a where a.type = ?1 and a.user = ?2")
    fun findByTypeANdUser(type: Type,user: User,pageable: Pageable) : Page<ArticleDto>
}