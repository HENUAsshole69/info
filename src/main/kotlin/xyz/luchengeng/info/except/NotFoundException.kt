package xyz.luchengeng.info.except

import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.ResponseStatus
import java.lang.RuntimeException

@ResponseStatus(code = HttpStatus.NOT_FOUND)
class NotFoundException(message: String): RuntimeException(message) {
}