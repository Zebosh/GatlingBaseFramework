var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "212",
        "ok": "0",
        "ko": "212"
    },
    "minResponseTime": {
        "total": "763",
        "ok": "-",
        "ko": "763"
    },
    "maxResponseTime": {
        "total": "1597",
        "ok": "-",
        "ko": "1597"
    },
    "meanResponseTime": {
        "total": "841",
        "ok": "-",
        "ko": "841"
    },
    "standardDeviation": {
        "total": "80",
        "ok": "-",
        "ko": "80"
    },
    "percentiles1": {
        "total": "822",
        "ok": "-",
        "ko": "822"
    },
    "percentiles2": {
        "total": "864",
        "ok": "-",
        "ko": "864"
    },
    "percentiles3": {
        "total": "960",
        "ok": "-",
        "ko": "960"
    },
    "percentiles4": {
        "total": "1039",
        "ok": "-",
        "ko": "1039"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 212,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "7.067",
        "ok": "-",
        "ko": "7.067"
    }
},
contents: {
"req_get-countries-6d750": {
        type: "REQUEST",
        name: "get countries",
path: "get countries",
pathFormatted: "req_get-countries-6d750",
stats: {
    "name": "get countries",
    "numberOfRequests": {
        "total": "212",
        "ok": "0",
        "ko": "212"
    },
    "minResponseTime": {
        "total": "763",
        "ok": "-",
        "ko": "763"
    },
    "maxResponseTime": {
        "total": "1597",
        "ok": "-",
        "ko": "1597"
    },
    "meanResponseTime": {
        "total": "841",
        "ok": "-",
        "ko": "841"
    },
    "standardDeviation": {
        "total": "80",
        "ok": "-",
        "ko": "80"
    },
    "percentiles1": {
        "total": "822",
        "ok": "-",
        "ko": "822"
    },
    "percentiles2": {
        "total": "864",
        "ok": "-",
        "ko": "864"
    },
    "percentiles3": {
        "total": "960",
        "ok": "-",
        "ko": "960"
    },
    "percentiles4": {
        "total": "1039",
        "ok": "-",
        "ko": "1039"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 212,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "7.067",
        "ok": "-",
        "ko": "7.067"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
