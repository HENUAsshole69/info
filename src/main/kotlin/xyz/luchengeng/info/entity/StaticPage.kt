package xyz.luchengeng.info.entity

import java.time.LocalDateTime
import java.util.*
import javax.persistence.*

@Entity
data class StaticPage(@Id val id : Long?,
                   val title: String,
                   var article: UUID
)