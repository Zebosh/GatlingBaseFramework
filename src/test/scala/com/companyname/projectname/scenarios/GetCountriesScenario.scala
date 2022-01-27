package com.companyname.projectname.scenarios


import io.gatling.http.Predef._
import io.gatling.core.Predef._
import io.gatling.core.structure.ScenarioBuilder
import io.gatling.http.request.builder.HttpRequestBuilder

class GetCountriesScenario {

  def getCountries(): HttpRequestBuilder =
    http("get countries")
      .get("/users?page=2")
      .check(status.is(200))

  def getCountriesScenario: ScenarioBuilder =
    scenario("get countries").exec(getCountries())
      .exec(flushCookieJar)
}
