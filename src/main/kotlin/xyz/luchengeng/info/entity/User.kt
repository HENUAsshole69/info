package xyz.luchengeng.info.entity

import javax.persistence.*

enum class UserType(s: String) {
    INDIVIDUAL("INDIVIDUAL"),
    ADMIN("ADMIN"),
    AUTH("AUTH")
}
@Entity
data class User(@Id @GeneratedValue(strategy = GenerationType.IDENTITY) val id : Long?,
                var type : UserType,
                val name : String
                )

@Entity
data class Credential(@Id @GeneratedValue(strategy = GenerationType.IDENTITY) val id : Long?,
                      @OneToOne(cascade = [CascadeType.PERSIST]) val user : User,
                      var password : String
                      )
