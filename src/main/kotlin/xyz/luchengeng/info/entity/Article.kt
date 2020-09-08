package xyz.luchengeng.info.entity

import java.time.LocalDateTime
import java.util.*
import javax.persistence.*

@Entity
data class Article(@Id @GeneratedValue(strategy = GenerationType.AUTO) val id : Long?,
                   val title: String,
                   @ElementCollection
                   val cover: MutableList<UUID>,
                   var article: UUID,
                   val time: LocalDateTime,
                   val type: Type?,
                   var published: Boolean,
                   var headline : Boolean,
                   var registry: String?,
                   var value: String?,
                   var top: Boolean?,
                   var wareHouseType: String?,
                   @OneToOne val user: User?,
                   val subType: SubType? = null
                   )

enum class Type{
    NEWS,
    ACTIVITY,
    POLICY,
    ANNOUNCE,
    TAX_FREE,
    EXHIBITION,
    AUCTION,
    EXHIBITION_INFO
}

enum class SubType{
    PAINTING,
    PORCELAIN,
    MISC,
    SPRING_AUTUMN,
    WANG_SU,
    ONLINE_AUCTION
}

data class ArticleDto(val id: Long,
                      val title: String,
                      val published : Boolean,
                      val time : LocalDateTime,
                      val type : Type,
                      val registry: String?,
                      val value: String?,
                      val wareHouseType: String?,
                      val subType: SubType?,
                      var headline : Boolean){
    constructor(a : Article) : this(a.id?:(-1),a.title, a.published, a.time, a.type?:Type.NEWS,a.registry,a.value,a.wareHouseType,a.subType,a.headline)
}