package xyz.luchengeng.info.service

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import xyz.luchengeng.info.except.NotFoundException
import xyz.luchengeng.minio.starter.bean.MinIOClient
import xyz.luchengeng.minio.starter.bean.ObjectMap
import java.util.*

@Service
class ContentService @Autowired constructor(private val map: ObjectMap) {
    fun getPic(id : UUID): ByteArray{
        return (map[id.toString()]?:throw NotFoundException("Pic Not Found")) as ByteArray
    }

    fun getArticle(id: UUID): String{
        return (map[id.toString()]?:throw NotFoundException("Content Not Found")) as String
    }
    fun saveContent(content : Any): UUID{
        val id = UUID.randomUUID()
        map[id.toString()] = content
        return id
    }
    fun delContent(id : UUID){
        map.remove(id.toString())
    }
}