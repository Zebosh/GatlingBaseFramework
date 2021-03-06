package com.companyname.projectname.simulations

import com.companyname.projectname.scenarios.GetCountriesScenario
import io.gatling.core.Predef.{Simulation,_}
import io.gatling.http.Predef._

import scala.concurrent.duration.DurationInt

class GetCountriesSimulation extends Simulation {

 // val Headers = Map ("x-rapidapi-host" -> "restcountries-v1.p.rapidapi.com", "x-rapidapi-key" -> "bf96595661mshdcb8f0e0407e3f7p10671djsn30e45bc5d48a")

  val HttpProtocol = http.baseUrl("https://reqres.in/api")

  val scenario = new GetCountriesScenario

  setUp(scenario.getCountriesScenario.inject(constantConcurrentUsers(20) during(30 seconds))).throttle(
    jumpToRps(2),
    holdFor (10),
    jumpToRps(10),
    holdFor(20)
  ).protocols(HttpProtocol).assertions(details("get countries").responseTime.max.between(0,5))
}