package xyz.luchengeng.info.except

import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.ResponseStatus

@ResponseStatus(code = HttpStatus.CONFLICT)
class ConflictException(message: String): RuntimeException(message)