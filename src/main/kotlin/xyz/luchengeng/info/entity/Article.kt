package xyz.luchengeng.info.entity

import org.springframework.data.domain.PageRequest
import java.time.LocalDateTime
import java.util.*
import javax.persistence.*

@Entity
data class Article(@Id @GeneratedValue(strategy = GenerationType.AUTO) val id : Long?,
                   val title: String,
                   @ElementCollection
                   val cover: MutableList<UUID>,
                   val article: UUID,
                   val time: LocalDateTime,
                   val type: Type,
                   val published: Boolean
                   )

enum class Type{
    ANTIQUE,
    NEWS
}

data class ArticleDto(val id: Long,
                      val title: String,
                      val published : Boolean,
                      val time : LocalDateTime,
                      val type : Type){
    constructor(a : Article) : this(a.id?:(-1),a.title, a.published, a.time, a.type)
}