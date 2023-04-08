package com.goldfrosch.questcreator

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class QcServerApplication

fun main(args: Array<String>) {
    runApplication<QcServerApplication>(*args)
}
