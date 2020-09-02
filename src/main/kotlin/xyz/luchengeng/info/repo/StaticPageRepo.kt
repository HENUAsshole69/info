package xyz.luchengeng.info.repo

import org.springframework.data.jpa.repository.JpaRepository
import xyz.luchengeng.info.entity.StaticPage

interface StaticPageRepo : JpaRepository<StaticPage,Long> {
}