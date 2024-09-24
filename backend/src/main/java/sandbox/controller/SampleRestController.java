package sandbox.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class SampleRestController {

  @GetMapping("/sample")
  public String sample() {
    System.out.println("Hello!");
    return "Hello World!!";
  }
}
