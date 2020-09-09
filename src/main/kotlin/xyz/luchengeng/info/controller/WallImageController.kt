package xyz.luchengeng.info.controller

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*
import xyz.luchengeng.info.entity.WallImage
import xyz.luchengeng.info.service.WallImageService

@RestController
class WallImageController @Autowired constructor(private val wallImageService: WallImageService) {
    @PostMapping("/wallImage")
    fun postImage( @RequestBody pic: ByteArray){
        wallImageService.postImage(pic)
    }
    @DeleteMapping("/wallImage/{id}")
    fun delImage( @PathVariable id : Long){
        wallImageService.delImage(id)
    }
    @GetMapping("/wallImage/list")
    fun getImageDtoList(): List<WallImage> =
            wallImageService.getAllImageDto()

    @GetMapping("/wallImage/{id}")
    fun getImage(@PathVariable id : Long)=
            wallImageService.getImage(id)

}