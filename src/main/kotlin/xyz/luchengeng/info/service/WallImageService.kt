package xyz.luchengeng.info.service

import xyz.luchengeng.info.except.NotFoundException
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import xyz.luchengeng.info.entity.StaticPage
import xyz.luchengeng.info.entity.WallImage
import xyz.luchengeng.info.repo.WallImageRepo

@Service
class WallImageService @Autowired constructor(private val wallImageRepo: WallImageRepo,
private val contentService: ContentService){
    fun getAllImageDto(): List<WallImage> =
            wallImageRepo.findAll()

    fun getImage(id: Long)=
        contentService.getPic((wallImageRepo.findByIdOrNull(id)?:throw NotFoundException("Pic Not Found")).pic)

    fun postImage(byteArray: ByteArray)=
           wallImageRepo.save(
                    WallImage(null,contentService.saveContent(byteArray))
            )

    fun delImage(id: Long)=
            wallImageRepo.deleteById(id)

}