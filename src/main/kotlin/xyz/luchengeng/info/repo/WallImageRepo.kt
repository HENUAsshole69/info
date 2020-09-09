package xyz.luchengeng.info.repo

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import xyz.luchengeng.info.entity.WallImage
@Repository
interface WallImageRepo : JpaRepository<WallImage,Long> {
}