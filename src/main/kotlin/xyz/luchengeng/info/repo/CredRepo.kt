package xyz.luchengeng.info.repo

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository
import xyz.luchengeng.info.entity.Credential
@Repository
interface CredRepo : JpaRepository<Credential,Long> {
    fun findFirstByUserNameAndPassword(userName : String,password : String) : Credential?
    @Query("select c from Credential c where c.user.id = ?1")
    fun findCredByUserId(userId : Long) : Credential?
}