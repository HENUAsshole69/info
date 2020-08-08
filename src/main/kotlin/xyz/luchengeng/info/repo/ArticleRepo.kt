package xyz.luchengeng.info.repo

import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import xyz.luchengeng.info.entity.Article
import xyz.luchengeng.info.entity.ArticleDto
import xyz.luchengeng.info.entity.Type

interface ArticleRepo: JpaRepository<Article,Long>{
    @Query("select new xyz.luchengeng.info.entity.ArticleDto(a) from Article a where a.type = ?1 and a.published = ?2",countQuery = "select count(a) from Article a where a.type = ?1 and a.published = ?2")
    fun findByTypeAndPublished(type: Type,published: Boolean,pageable: Pageable) : Page<ArticleDto>

    @Query("select new xyz.luchengeng.info.entity.ArticleDto(a) from Article a where a.type = ?1",countQuery = "select count(a) from Article a where a.type = ?1")
    fun findByType(type: Type,pageable: Pageable) : Page<ArticleDto>
}