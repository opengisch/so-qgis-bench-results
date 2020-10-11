# QGIS Benchmark summary compare-deployment-sequential (20201011-003058)


compare different types of deployment for QGIS server 3.10 using the same settings

_run completed in 191.55s_

## Summary
| name                               | group   |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   cpuMax% |   cpuAvg% |   errorPct |
|------------------------------------|---------|--------------|-------------------|---------------|--------------|------------|------------|-----------|-----------|------------|
| qgis310-unlimited-threads          | Global  |        27.7  |              0    |            72 |            0 |     2534.2 |    2261.17 |      32.3 |   20.6333 |          0 |
| qgis310-multithread-singleinstance | Global  |        27.92 |              0.79 |            72 |            0 |     2351.2 |    2093.5  |      29.8 |   20.1    |          0 |
| qgis310-balanced                   | Global  |        31.81 |             14.84 |            72 |            0 |     2480.1 |    2229.37 |      31.3 |   17.7    |          0 |
| qgis310-singlethread-multiinstance | Global  |        37.48 |             35.31 |            72 |            0 |     2646.4 |    2390.53 |      27   |   14.6333 |          0 |

## Aggregated
| name                                                             | group                    |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   cpuMax% |   cpuAvg% |   errorPct |
|------------------------------------------------------------------|--------------------------|--------------|-------------------|---------------|--------------|------------|------------|-----------|-----------|------------|
| qgis310-multithread-singleinstance > somap310_grundplanav_farbig | somap_grundplanav_farbig |        12.98 |              0    |            22 |            0 |     2351.2 |     2141.9 |      27.6 |      22.2 |          0 |
| qgis310-unlimited-threads > somap310_grundplanav_farbig          | somap_grundplanav_farbig |        13.07 |              0.69 |            22 |            0 |     2491.6 |     2300.9 |      32.3 |      22.5 |          0 |
| qgis310-balanced > somap310_grundplanav_farbig                   | somap_grundplanav_farbig |        15.59 |             20.11 |            22 |            0 |     2480.1 |     2293.9 |      31.3 |      18.6 |          0 |
| qgis310-singlethread-multiinstance > somap310_grundplanav_farbig | somap_grundplanav_farbig |        19.27 |             48.46 |            22 |            0 |     2643.7 |     2422.1 |      27   |      14.5 |          0 |
| qgis310-unlimited-threads > somap310_grundplanav_sw              | somap_grundplanav_sw     |        12.11 |              0    |            20 |            0 |     2534.2 |     2360.4 |      30   |      19.2 |          0 |
| qgis310-multithread-singleinstance > somap310_grundplanav_sw     | somap_grundplanav_sw     |        12.4  |              2.39 |            20 |            0 |     2312.4 |     2120.9 |      29.4 |      18.6 |          0 |
| qgis310-balanced > somap310_grundplanav_sw                       | somap_grundplanav_sw     |        13.35 |             10.24 |            20 |            0 |     2349.4 |     2266.2 |      28.5 |      17   |          0 |
| qgis310-singlethread-multiinstance > somap310_grundplanav_sw     | somap_grundplanav_sw     |        14.87 |             22.79 |            20 |            0 |     2646.4 |     2427.8 |      23.3 |      15.4 |          0 |
| qgis310-unlimited-threads > somap310_lk                          | somap_lk                 |         2.52 |              0    |            30 |            0 |     2145.6 |     2122.2 |      31   |      20.2 |          0 |
| qgis310-multithread-singleinstance > somap310_lk                 | somap_lk                 |         2.54 |              0.79 |            30 |            0 |     2060.6 |     2017.7 |      29.8 |      19.5 |          0 |
| qgis310-balanced > somap310_lk                                   | somap_lk                 |         2.87 |             13.89 |            30 |            0 |     2149.3 |     2128   |      27.2 |      17.5 |          0 |
| qgis310-singlethread-multiinstance > somap310_lk                 | somap_lk                 |         3.34 |             32.54 |            30 |            0 |     2325.6 |     2321.7 |      14.2 |      14   |          0 |

## Detail
| name                                                                                                                                                                                                                                         | group                               |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis310-multithread-singleinstance > somap310_grundplanav_farbig > av_f.txt](../results/details/compare-deployment-sequential/20201011-003058/qgis310-multithread-singleinstance/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f.txt |        12.98 |              0    |            22 |            0 |          0 |      590.091  |           487   |          194 |         2493 |         723.2 |       2227.8  |          2493 |      1.68919 |                220.256 |           0.719825 |     2351.2 |     2141.9 |     1976.6 |      27.6 |      22.2 |      18.1 |
| [qgis310-unlimited-threads > somap310_grundplanav_farbig > av_f.txt](../results/details/compare-deployment-sequential/20201011-003058/qgis310-unlimited-threads/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html)                   | somap_grundplanav_farbig > av_f.txt |        13.07 |              0.69 |            22 |            0 |          0 |      594.273  |           451   |          191 |         2731 |         738.5 |       2433.25 |          2731 |      1.67619 |                218.561 |           0.714286 |     2491.6 |     2300.9 |     2109.8 |      32.3 |      22.5 |      17.1 |
| [qgis310-balanced > somap310_grundplanav_farbig > av_f.txt](../results/details/compare-deployment-sequential/20201011-003058/qgis310-balanced/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html)                                     | somap_grundplanav_farbig > av_f.txt |        15.59 |             20.11 |            22 |            0 |          0 |      708.727  |           612   |          191 |         2794 |         821.9 |       2499.4  |          2794 |      1.40647 |                183.391 |           0.599348 |     2480.1 |     2293.9 |     2172.2 |      31.3 |      18.6 |      15.2 |
| [qgis310-singlethread-multiinstance > somap310_grundplanav_farbig > av_f.txt](../results/details/compare-deployment-sequential/20201011-003058/qgis310-singlethread-multiinstance/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f.txt |        19.27 |             48.46 |            22 |            0 |          0 |      875.955  |           806.5 |          195 |         3056 |        1072   |       2760.2  |          3056 |      1.13883 |                148.494 |           0.485299 |     2643.7 |     2422.1 |     2342.8 |      27   |      14.5 |      12.3 |
| [qgis310-unlimited-threads > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201011-003058/qgis310-unlimited-threads/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)                         | somap_grundplanav_sw > av_sw.txt    |        12.11 |              0    |            20 |            0 |          0 |      605.55   |           370   |          192 |         2395 |        1273.2 |       2339.5  |          2395 |      1.64393 |                511.502 |           0.688394 |     2534.2 |     2360.4 |     2213.6 |      30   |      19.2 |      13.4 |
| [qgis310-multithread-singleinstance > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201011-003058/qgis310-multithread-singleinstance/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw.txt    |        12.4  |              2.39 |            20 |            0 |          0 |      619.95   |           390.5 |          216 |         2241 |        1352.5 |       2197.8  |          2241 |      1.60604 |                499.715 |           0.672529 |     2312.4 |     2120.9 |     2066.9 |      29.4 |      18.6 |      15.2 |
| [qgis310-balanced > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201011-003058/qgis310-balanced/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)                                           | somap_grundplanav_sw > av_sw.txt    |        13.35 |             10.24 |            20 |            0 |          0 |      667.45   |           446   |          207 |         2365 |        1413.1 |       2318.1  |          2365 |      1.49209 |                464.259 |           0.624813 |     2349.4 |     2266.2 |     2227.5 |      28.5 |      17   |      13.1 |
| [qgis310-singlethread-multiinstance > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201011-003058/qgis310-singlethread-multiinstance/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw.txt    |        14.87 |             22.79 |            20 |            0 |          0 |      743.35   |           548   |          193 |         2356 |        1644   |       2321.3  |          2356 |      1.33976 |                416.863 |           0.561026 |     2646.4 |     2427.8 |     2340.5 |      23.3 |      15.4 |      12.3 |
| [qgis310-unlimited-threads > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201011-003058/qgis310-unlimited-threads/somap310_lk/lk.txt/dashboard/index.html)                                                       | somap_lk > lk.txt                   |         2.52 |              0    |            30 |            0 |          0 |       83.8333 |            78.5 |           54 |          234 |          88.9 |        157    |           234 |     11.705   |                317.275 |           4.77498  |     2145.6 |     2122.2 |     2076   |      31   |      20.2 |      10.2 |
| [qgis310-multithread-singleinstance > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201011-003058/qgis310-multithread-singleinstance/somap310_lk/lk.txt/dashboard/index.html)                                     | somap_lk > lk.txt                   |         2.54 |              0.79 |            30 |            0 |          0 |       84.5667 |            80   |           53 |          255 |          89   |        165.35 |           255 |     11.5964  |                314.332 |           4.73068  |     2060.6 |     2017.7 |     1959.2 |      29.8 |      19.5 |       8.7 |
| [qgis310-balanced > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201011-003058/qgis310-balanced/somap310_lk/lk.txt/dashboard/index.html)                                                                         | somap_lk > lk.txt                   |         2.87 |             13.89 |            30 |            0 |          0 |       95.5333 |            91.5 |           54 |          243 |         106.6 |        169.85 |           243 |     10.3128  |                279.538 |           4.20704  |     2149.3 |     2128   |     2079.3 |      27.2 |      17.5 |       9.5 |
| [qgis310-singlethread-multiinstance > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201011-003058/qgis310-singlethread-multiinstance/somap310_lk/lk.txt/dashboard/index.html)                                     | somap_lk > lk.txt                   |         3.34 |             32.54 |            30 |            0 |          0 |      111.333  |           105   |           57 |          272 |         128   |        195.55 |           272 |      8.84695 |                239.804 |           3.60905  |     2325.6 |     2321.7 |     2316.3 |      14.2 |      14   |      13.6 |

### used global configuration

```
cpu-cores: 4
deploy-method: docker-swarm
logs-dir: /home/ubuntu/so-qgis-bench/logs/prepared
parallel-requests: 10
reports-dir: ./reports/
result-dir: /home/ubuntu/so-qgis-bench/results

```
### test configurations

```
description: 'compare different types of deployment for QGIS server 3.10 using the same settings'

test-cases:

  qgis310-singlethread-multiinstance:
    active: yes
    parallel-requests: 1
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_SERVER_CACHE_SIZE: '50'
      PG_SERVICE: 'pg_service.conf'
    projects:
      somap310_lk:
        - lk.txt
      somap310_grundplanav_farbig:
        - av_f.txt
      somap310_grundplanav_sw:
        - av_sw.txt

  qgis310-multithread-singleinstance:
    inherit: qgis310-singlethread-multiinstance
    compose-variables:
      QGIS_REPLICAS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_SERVER_MAX_THREADS: '6'

  qgis310-balanced:
    inherit: qgis310-singlethread-multiinstance
    compose-variables:
      QGIS_REPLICAS: '3'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_SERVER_MAX_THREADS: '2'

  qgis310-unlimited-threads:
    inherit: qgis310-balanced
    compose-variables:
      QGIS_SERVER_MAX_THREADS: '-1'

```
### parsed test configurations

```
description: compare different types of deployment for QGIS server 3.10 using the
  same settings
test-cases:
  qgis310-balanced:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '3'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '2'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-singlethread-multiinstance
    parallel-requests: 1
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f.txt
      somap310_grundplanav_sw:
      - av_sw.txt
      somap310_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx
  qgis310-multithread-singleinstance:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '6'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-singlethread-multiinstance
    parallel-requests: 1
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f.txt
      somap310_grundplanav_sw:
      - av_sw.txt
      somap310_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx
  qgis310-singlethread-multiinstance:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_VERSION: '3.10'
    parallel-requests: 1
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f.txt
      somap310_grundplanav_sw:
      - av_sw.txt
      somap310_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx
  qgis310-unlimited-threads:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '3'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '-1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-balanced
    parallel-requests: 1
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f.txt
      somap310_grundplanav_sw:
      - av_sw.txt
      somap310_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx

```