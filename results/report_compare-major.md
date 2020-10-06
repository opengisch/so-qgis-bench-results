# QGIS Benchmark summary 20201004-174110

_run completed in 2258.41s_

## Summary
| name          |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |
|---------------|--------------|-------------|---------------|--------------|------------|
| qgis310-stock |      11139.8 |        0    |         16015 |         4815 |      30.07 |
| qgis314-stock |      11497   |        3.21 |         16015 |         3400 |      21.23 |
| qgis218-stock |      19041.7 |       70.93 |         16015 |         3555 |      22.2  |

## Aggregated
| name                                        |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |
|---------------------------------------------|--------------|-------------|---------------|--------------|------------|
| qgis218-stock > somap218_grundplanav_farbig |       681.5  |        0    |           735 |            0 |       0    |
| qgis310-stock > somap310_grundplanav_farbig |       980.33 |       43.85 |           735 |            0 |       0    |
| qgis314-stock > somap314_grundplanav_farbig |       982.11 |       44.11 |           735 |            0 |       0    |
| qgis310-stock > somap310_lk                 |      3247.06 |      376.46 |          9932 |         4660 |      46.92 |
| qgis314-stock > somap314_lk                 |      3545.91 |      420.31 |          9932 |         3245 |      32.67 |
| qgis218-stock > somap218_grundplanav_sw     |      5989.91 |      778.93 |          5348 |          155 |       2.9  |
| qgis310-stock > somap310_grundplanav_sw     |      6912.43 |      914.3  |          5348 |          155 |       2.9  |
| qgis314-stock > somap314_grundplanav_sw     |      6968.99 |      922.6  |          5348 |          155 |       2.9  |
| qgis218-stock > somap218_lk                 |     12370.3  |     1715.16 |          9932 |         3400 |      34.23 |

## Detail
| name                                                       |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec | dashboard                                                                                                                               |
|------------------------------------------------------------|--------------|-------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| qgis218-stock > somap218_grundplanav_farbig > av_f_big.txt |       681.5  |        0    |           735 |            0 |    0       |       927.216 |           714   |          226 |        10149 |        1574.4 |       1972.2  |       3208.72 |      20.2373 |                3542.31 |            8.91036 | [JMeter dashboard](./details/compare-major/20201004-174110/qgis218-stock/somap218_grundplanav_farbig/av_f_big.txt/dashboard/index.html) |
| qgis310-stock > somap310_grundplanav_farbig > av_f_big.txt |       980.33 |       43.85 |           735 |            0 |    0       |      1333.79  |          1254   |          275 |         5746 |        1964.2 |       2401.6  |       3453.4  |      14.5906 |                2135.28 |            6.42412 | [JMeter dashboard](./details/compare-major/20201004-174110/qgis310-stock/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) |
| qgis314-stock > somap314_grundplanav_farbig > av_f_big.txt |       982.11 |       44.11 |           735 |            0 |    0       |      1336.21  |          1257   |          316 |         5112 |        2047.8 |       2274.6  |       3460.32 |      14.5767 |                2133.15 |            6.41801 | [JMeter dashboard](./details/compare-major/20201004-174110/qgis314-stock/somap314_grundplanav_farbig/av_f_big.txt/dashboard/index.html) |
| qgis310-stock > somap310_lk > lk_big.txt                   |      3247.06 |      376.46 |          9932 |         4660 |   46.919   |       326.93  |            49   |            1 |         5478 |        1049   |       1516.35 |       2771.05 |      59.8696 |                1528.35 |           40.0646  | [JMeter dashboard](./details/compare-major/20201004-174110/qgis310-stock/somap310_lk/lk_big.txt/dashboard/index.html)                   |
| qgis314-stock > somap314_lk > lk_big.txt                   |      3545.91 |      420.31 |          9932 |         3245 |   32.6722  |       357.018 |           127   |            1 |         5922 |        1037.4 |       1509.45 |       2578.01 |      55.0866 |                1669.62 |           36.8063  | [JMeter dashboard](./details/compare-major/20201004-174110/qgis314-stock/somap314_lk/lk_big.txt/dashboard/index.html)                   |
| qgis218-stock > somap218_grundplanav_sw > av_sw_big.txt    |      5989.91 |      778.93 |          5348 |          155 |    2.89828 |      1120.03  |           615.5 |            3 |        90095 |        2477.2 |       3192.85 |       5791.89 |      17.4718 |                5279.47 |            7.69944 | [JMeter dashboard](./details/compare-major/20201004-174110/qgis218-stock/somap218_grundplanav_sw/av_sw_big.txt/dashboard/index.html)    |
| qgis310-stock > somap310_grundplanav_sw > av_sw_big.txt    |      6912.43 |      914.3  |          5348 |          155 |    2.89828 |      1292.53  |          1146   |            2 |         9203 |        2328.1 |       2731.65 |       3844.06 |      15.3474 |                4031.2  |            6.76325 | [JMeter dashboard](./details/compare-major/20201004-174110/qgis310-stock/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)    |
| qgis314-stock > somap314_grundplanav_sw > av_sw_big.txt    |      6968.99 |      922.6  |          5348 |          155 |    2.89828 |      1303.1   |          1163   |            2 |         9826 |        2285.3 |       2716    |       3858.26 |      15.2583 |                4007.65 |            6.724   | [JMeter dashboard](./details/compare-major/20201004-174110/qgis314-stock/somap314_grundplanav_sw/av_sw_big.txt/dashboard/index.html)    |
| qgis218-stock > somap218_lk > lk_big.txt                   |     12370.3  |     1715.16 |          9932 |         3400 |   34.2328  |      1245.5   |           183   |            1 |        90479 |        3189.7 |       6064.7  |      16215.5  |      14.4401 |                 447.49 |            9.41156 | [JMeter dashboard](./details/compare-major/20201004-174110/qgis218-stock/somap218_lk/lk_big.txt/dashboard/index.html)                   |

### used global configuration

```
cpu-cores: 20
deploy-method: docker-swarm
logs-dir: /home/marco/so.ch/so-qgis-bench/./logs/prepared/
reports-dir: ./reports/
result-dir: /home/marco/so.ch/so-qgis-bench/./results/

```
### test configurations

```
# this file includes the test cases

# TODO use  - access_urls_big.txt_cleaned_big.txt

test-cases:
  base:
    active: no
    compose-variables:
      QGIS_REPLICAS: '8'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_SERVER_MAX_THREADS: '4' #QGIS3
      QGIS_FCGI_PROCESSES: '4' #QGIS2

      PG_SERVICE: 'pg_service.conf'


  qgis218-stock:
    active: yes
    inherit: base
    template: docker-compose-qgis-2
    path-prefix: 'ows'
    projects:
      somap218_lk:
        - lk_big.txt
      somap218_grundplanav_farbig:
        - av_f_big.txt
      somap218_grundplanav_sw:
        - av_sw_big.txt

  qgis310-stock:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
    projects:
      somap310_lk:
        - lk_big.txt
      somap310_grundplanav_farbig:
        - av_f_big.txt
      somap310_grundplanav_sw:
        - av_sw_big.txt

  qgis314-stock:
    active: yes
    inherit: qgis310-stock
    compose-variables:
      QGIS_VERSION: '3.14'
    projects:
      somap314_lk:
        - lk_big.txt
      somap314_grundplanav_farbig:
        - av_f_big.txt
      somap314_grundplanav_sw:
        - av_sw_big.txt

  qgis314-standalone:
    active: no
    inherit: qgis310-stock
    template: docker-compose-qgis-3-standalone
    path-prefix: 'ogc'

```
### parsed test configurations

```
test-cases:
  base:
    active: false
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '4'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '8'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '4'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
  qgis218-stock:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '4'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '8'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '4'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
    inherit: base
    path-prefix: ows
    projects:
      somap218_grundplanav_farbig:
      - av_f_big.txt
      somap218_grundplanav_sw:
      - av_sw_big.txt
      somap218_lk:
      - lk_big.txt
    template: docker-compose-qgis-2
  qgis310-stock:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '4'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '8'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '4'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: base
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f_big.txt
      somap310_grundplanav_sw:
      - av_sw_big.txt
      somap310_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-nginx
  qgis314-standalone:
    active: false
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '4'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '8'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '4'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-stock
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f_big.txt
      somap310_grundplanav_sw:
      - av_sw_big.txt
      somap310_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-standalone
  qgis314-stock:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '4'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '8'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '4'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.14'
    inherit: qgis310-stock
    path-prefix: ogc
    projects:
      somap314_grundplanav_farbig:
      - av_f_big.txt
      somap314_grundplanav_sw:
      - av_sw_big.txt
      somap314_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-nginx

```
