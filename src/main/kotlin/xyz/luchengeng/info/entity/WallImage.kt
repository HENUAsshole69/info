package xyz.luchengeng.info.entity

import java.time.LocalDateTime
import java.util.*
import javax.persistence.*

@Entity
data class WallImage(@Id @GeneratedValue(strategy = GenerationType.AUTO) val id : Long?,
                      var pic: UUID
)