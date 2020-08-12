package xyz.luchengeng.info.repo

import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository
import xyz.luchengeng.info.entity.User

@Repository
interface UserRepo : JpaRepository<User,Long>{
    @Query("select u from User u where u.name like %?1%")
    fun findUserByName(keyWord : String,pageable : Pageable) : Page<User>
}