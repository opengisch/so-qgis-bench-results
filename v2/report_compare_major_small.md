# QGIS Benchmark summary example (20201005-133036)

_run completed in 78.18s_

## Summary
| name          |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |
|---------------|--------------|-------------|---------------|--------------|------------|
| qgis218-stock |        64.86 |        0    |            72 |            0 |          0 |
| qgis310-stock |       106.99 |       64.96 |            72 |            0 |          0 |
| qgis314-stock |       127.32 |       96.3  |            72 |            0 |          0 |

## Aggregated
| name                                        |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |
|---------------------------------------------|--------------|-------------|---------------|--------------|------------|
| qgis310-stock > somap310_lk                 |         5.52 |        0    |            30 |            0 |          0 |
| qgis314-stock > somap314_lk                 |         6    |        8.7  |            30 |            0 |          0 |
| qgis218-stock > somap218_lk                 |        12.14 |      119.93 |            30 |            0 |          0 |
| qgis218-stock > somap218_grundplanav_sw     |        24.54 |      344.57 |            20 |            0 |          0 |
| qgis218-stock > somap218_grundplanav_farbig |        28.18 |      410.51 |            22 |            0 |          0 |
| qgis310-stock > somap310_grundplanav_farbig |        43.85 |      694.38 |            22 |            0 |          0 |
| qgis314-stock > somap314_grundplanav_sw     |        54.16 |      881.16 |            20 |            0 |          0 |
| qgis310-stock > somap310_grundplanav_sw     |        57.62 |      943.84 |            20 |            0 |          0 |
| qgis314-stock > somap314_grundplanav_farbig |        67.16 |     1116.67 |            22 |            0 |          0 |

## Detail
| name                                                   |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec | dashboard                                                                                                                      |
|--------------------------------------------------------|--------------|-------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|--------------------------------------------------------------------------------------------------------------------------------|
| qgis310-stock > somap310_lk > lk.txt                   |         5.52 |        0    |            30 |            0 |          0 |       184.067 |           172.5 |           96 |          513 |         239.9 |        435.45 |           513 |     29.2398  |                792.569 |           11.9281  | [JMeter dashboard](../results/example/20201005-133036/qgis310-stock/somap310_lk/lk.txt/dashboard/index.html)                   |
| qgis314-stock > somap314_lk > lk.txt                   |         6    |        8.7  |            30 |            0 |          0 |       199.9   |           185.5 |          107 |          441 |         274.9 |        387.65 |           441 |     28.9575  |                784.749 |           11.813   | [JMeter dashboard](../results/example/20201005-133036/qgis314-stock/somap314_lk/lk.txt/dashboard/index.html)                   |
| qgis218-stock > somap218_lk > lk.txt                   |        12.14 |      119.93 |            30 |            0 |          0 |       404.6   |            88.5 |           64 |         1584 |        1094.4 |       1570.8  |          1584 |     16.1551  |                438.455 |            6.59035 | [JMeter dashboard](../results/example/20201005-133036/qgis218-stock/somap218_lk/lk.txt/dashboard/index.html)                   |
| qgis218-stock > somap218_grundplanav_sw > av_sw.txt    |        24.54 |      344.57 |            20 |            0 |          0 |      1227.15  |          1182.5 |          279 |         2410 |        2316.2 |       2406.15 |          2410 |      5.40394 |               1937.35  |            2.2629  | [JMeter dashboard](../results/example/20201005-133036/qgis218-stock/somap218_grundplanav_sw/av_sw.txt/dashboard/index.html)    |
| qgis218-stock > somap218_grundplanav_farbig > av_f.txt |        28.18 |      410.51 |            22 |            0 |          0 |      1281.14  |           919.5 |          245 |         2739 |        2683.4 |       2737.5  |          2739 |      6.26067 |                990.228 |            2.6679  | [JMeter dashboard](../results/example/20201005-133036/qgis218-stock/somap218_grundplanav_farbig/av_f.txt/dashboard/index.html) |
| qgis310-stock > somap310_grundplanav_farbig > av_f.txt |        43.85 |      694.38 |            22 |            0 |          0 |      1993.09  |          1919.5 |         1685 |         2521 |        2423   |       2509.45 |          2521 |      4.03004 |                525.483 |            1.71735 | [JMeter dashboard](../results/example/20201005-133036/qgis310-stock/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html) |
| qgis314-stock > somap314_grundplanav_sw > av_sw.txt    |        54.16 |      881.16 |            20 |            0 |          0 |      2708.05  |          2811.5 |         1338 |         3796 |        3534.9 |       3783.75 |          3796 |      2.81452 |                875.716 |            1.17858 | [JMeter dashboard](../results/example/20201005-133036/qgis314-stock/somap314_grundplanav_sw/av_sw.txt/dashboard/index.html)    |
| qgis310-stock > somap310_grundplanav_sw > av_sw.txt    |        57.62 |      943.84 |            20 |            0 |          0 |      2881.15  |          2834   |         1310 |         4276 |        4001.2 |       4263.1  |          4276 |      2.74763 |                854.917 |            1.15057 | [JMeter dashboard](../results/example/20201005-133036/qgis310-stock/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)    |
| qgis314-stock > somap314_grundplanav_farbig > av_f.txt |        67.16 |     1116.67 |            22 |            0 |          0 |      3052.82  |          2833   |         2401 |         4190 |        4092.2 |       4186.4  |          4190 |      2.73564 |                356.687 |            1.16575 | [JMeter dashboard](../results/example/20201005-133036/qgis314-stock/somap314_grundplanav_farbig/av_f.txt/dashboard/index.html) |

### used global configuration

```
cpu-cores: 4
deploy-method: docker-swarm
logs-dir: /home/marco/so.ch/qgis_benchmarking/so-qgis-bench/./logs/prepared/
reports-dir: ./reports/
result-dir: /home/marco/so.ch/qgis_benchmarking/so-qgis-bench/./results/

```
### test configurations

```
# this file includes the test cases and shows all possible configurations.
# consider this file the reference format to be used as documentation

test-cases:
  base:
    # this test case is not executed. It is used only to have some common settings
    active: no
    parallel_requests: 10
    compose-variables:
      QGIS_REPLICAS: '2'
      QGIS_MAX_CACHE_LAYERS: '100'
      PG_SERVICE: 'pg_service.conf'

  qgis218-stock:
    # active test cases *must* be called qgisx...
    # the x is used to determine what major qgis version we are testing
    active: yes
    inherit: base
    template: docker-compose-qgis-2
    path-prefix: 'ows'
    compose-variables:
      QGIS_FCGI_PROCESSES: '2'
    projects:
      somap218_lk:
        - lk.txt
      somap218_grundplanav_farbig:
        - av_f.txt
      somap218_grundplanav_sw:
        - av_sw.txt

  qgis310-stock:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_SERVER_MAX_THREADS: '2'
      QGIS_SERVER_CACHE_SIZE: '50'
    projects:
      somap310_lk:
        - lk.txt
      somap310_grundplanav_farbig:
        - av_f.txt
      somap310_grundplanav_sw:
        - av_sw.txt

  qgis314-stock:
    active: yes
    # recursive inheritance is allowed
    inherit: qgis310-stock
    compose-variables:
      QGIS_VERSION: '3.14'
    projects:
      somap314_lk:
        - lk.txt
      somap314_grundplanav_farbig:
        - av_f.txt
      somap314_grundplanav_sw:
        - av_sw.txt

  qgis314-example-with-inherited-projects:
    active: no
    inherit: qgis310-stock
    # if inherit_projects is yes, all the projects from the inherited cases are also tested
    inherit_projects: yes
    compose-variables:
      QGIS_VERSION: '3.14'
    projects:
      somap314_lk:
        - lk.txt
      somap314_grundplanav_farbig:
        - av_f.txt
      somap314_grundplanav_sw:
        - av_sw.txt

```
### parsed test configurations

```
test-cases:
  base:
    active: false
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '2'
    parallel_requests: 10
  qgis218-stock:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '2'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '2'
    inherit: base
    parallel_requests: 10
    path-prefix: ows
    projects:
      somap218_grundplanav_farbig:
      - av_f.txt
      somap218_grundplanav_sw:
      - av_sw.txt
      somap218_lk:
      - lk.txt
    template: docker-compose-qgis-2
  qgis310-stock:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '2'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '2'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: base
    parallel_requests: 10
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f.txt
      somap310_grundplanav_sw:
      - av_sw.txt
      somap310_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx
  qgis314-example-with-inherited-projects:
    active: false
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '2'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '2'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.14'
    inherit: qgis310-stock
    inherit_projects: true
    parallel_requests: 10
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f.txt
      somap310_grundplanav_sw:
      - av_sw.txt
      somap310_lk:
      - lk.txt
      somap314_grundplanav_farbig:
      - av_f.txt
      somap314_grundplanav_sw:
      - av_sw.txt
      somap314_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx
  qgis314-stock:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '2'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '2'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.14'
    inherit: qgis310-stock
    parallel_requests: 10
    path-prefix: ogc
    projects:
      somap314_grundplanav_farbig:
      - av_f.txt
      somap314_grundplanav_sw:
      - av_sw.txt
      somap314_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx

```
