# QGIS Benchmark summary compare-deployment-sequential (20201101-093242)


compare different types of deployment for QGIS server 3.10 using the same settings

_run completed in 00h 31m 14s_

_Sample size per configuration 785_
## Summary plot
An interactive summary plot can be found [here](report_compare-deployment-sequential_20201101-093242_plot.html)

## Summary
| name                               | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------------------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-unlimited-threads          | Global  |                381   | +0.0%                        |          362.5 | +0.0%                  |           856.5 | +0.0%                   |          460 |         5560 |           785 |            0 |     5905.1 |    5006.07 |     4675   |      35   |   21.9    |      12.3 |          0 |
| qgis310-multithread-singleinstance | Global  |                383.5 | +0.7%                        |          364.5 | +0.6%                  |           889.5 | +3.9%                   |          443 |         5564 |           785 |            0 |     5588.7 |    4781.13 |     4552.1 |      45.3 |   22.5667 |      12.5 |          0 |
| qgis310-balanced                   | Global  |                458   | +20.2%                       |          439.7 | +21.3%                 |          1107   | +29.2%                  |          456 |         5879 |           785 |            0 |     5818.8 |    4954    |     4671.5 |      33.5 |   19.9667 |      12.4 |          0 |
| qgis310-singlethread-multiinstance | Global  |                570.6 | +49.8%                       |          552   | +52.3%                 |          1390   | +62.3%                  |          438 |         6062 |           785 |            0 |     6167.6 |    5204.87 |     4847.6 |      34.7 |   16.5667 |      11.9 |          0 |

## Aggregated
| name                                                             | group                    |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------------------------------------------------|--------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-unlimited-threads > somap310_grundplanav_farbig          | somap_grundplanav_farbig |                353.9 | +0.0%                        |          347.3 | +0.0%                  |           400   | +0.0%                   |          178 |         2906 |           735 |            0 |     5905.1 |     5290.2 |     4686.4 |      34.5 |      20   |      12.3 |          0 |
| qgis310-multithread-singleinstance > somap310_grundplanav_farbig | somap_grundplanav_farbig |                356.4 | +0.7%                        |          349.6 | +0.7%                  |           418   | +4.5%                   |          175 |         2986 |           735 |            0 |     5588.7 |     5019.1 |     4608.3 |      45.3 |      19.8 |      12.5 |          0 |
| qgis310-balanced > somap310_grundplanav_farbig                   | somap_grundplanav_farbig |                429.4 | +21.3%                       |          422.7 | +21.7%                 |           543   | +35.8%                  |          172 |         2984 |           735 |            0 |     5818.8 |     5208.6 |     4671.5 |      32.1 |      16.5 |      12.4 |          0 |
| qgis310-singlethread-multiinstance > somap310_grundplanav_farbig | somap_grundplanav_farbig |                540.1 | +52.6%                       |          533.3 | +53.6%                 |           716   | +79.0%                  |          171 |         3329 |           735 |            0 |     6167.6 |     5481.9 |     4877.9 |      34.7 |      13   |      11.9 |          0 |
| qgis310-multithread-singleinstance > somap310_grundplanav_sw     | somap_grundplanav_sw     |                 18.5 | +0.0%                        |           12.4 | +0.0%                  |           392   | +4.0%                   |          214 |         2328 |            20 |            0 |     4915.1 |     4741.6 |     4668.7 |      34.7 |      19.3 |      13   |          0 |
| qgis310-unlimited-threads > somap310_grundplanav_sw              | somap_grundplanav_sw     |                 18.8 | +1.6%                        |           12.7 | +2.2%                  |           377   | +0.0%                   |          227 |         2415 |            20 |            0 |     5220.5 |     5036.4 |     4971.3 |      27.2 |      19   |      15.2 |          0 |
| qgis310-balanced > somap310_grundplanav_sw                       | somap_grundplanav_sw     |                 20   | +8.1%                        |           14   | +12.9%                 |           469.5 | +24.5%                  |          228 |         2646 |            20 |            0 |     5129.8 |     4958.5 |     4888.4 |      33.5 |      18.1 |      13.4 |          0 |
| qgis310-singlethread-multiinstance > somap310_grundplanav_sw     | somap_grundplanav_sw     |                 21.2 | +14.6%                       |           15.3 | +22.7%                 |           566   | +50.1%                  |          207 |         2444 |            20 |            0 |     5473.6 |     5279.7 |     5227.5 |      34.7 |      16.2 |      12.5 |          0 |
| qgis310-unlimited-threads > somap310_lk                          | somap_lk                 |                  8.3 | +0.0%                        |            2.5 | +0.6%                  |            79.5 | +0.0%                   |           55 |          239 |            30 |            0 |     4700.1 |     4691.6 |     4675   |      35   |      26.7 |      18.7 |          0 |
| qgis310-multithread-singleinstance > somap310_lk                 | somap_lk                 |                  8.6 | +3.6%                        |            2.5 | +0.0%                  |            79.5 | +0.0%                   |           54 |          250 |            30 |            0 |     4609.1 |     4582.7 |     4552.1 |      36.2 |      28.6 |      20.1 |          0 |
| qgis310-balanced > somap310_lk                                   | somap_lk                 |                  8.6 | +3.6%                        |            3   | +17.2%                 |            94.5 | +18.9%                  |           56 |          249 |            30 |            0 |     4699.2 |     4694.9 |     4690.5 |      31.7 |      25.3 |      18.9 |          0 |
| qgis310-singlethread-multiinstance > somap310_lk                 | somap_lk                 |                  9.3 | +12.0%                       |            3.4 | +34.3%                 |           108   | +35.8%                  |           60 |          289 |            30 |            0 |     4863.1 |     4853   |     4847.6 |      30.1 |      20.5 |      14.4 |          0 |

## Detail
| name                                                                                                                                                                                                                                                 | group                                   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis310-unlimited-threads > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment-sequential/20201101-093242/qgis310-unlimited-threads/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)                   | somap_grundplanav_farbig > av_f_big.txt |                353.9 | +0.0%                        |          347.3 | +0.0%                  |           400   | +0.0%                   |           735 |            0 |          0 |      472.465  |          178 |         2906 |         714   |        854.2  |       1652.68 |      2.10987 |                308.775 |           0.928962 |     5905.1 |     5290.2 |     4686.4 |      34.5 |      20   |      12.3 |
| [qgis310-multithread-singleinstance > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment-sequential/20201101-093242/qgis310-multithread-singleinstance/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |                356.4 | +0.7%                        |          349.6 | +0.7%                  |           418   | +4.5%                   |           735 |            0 |          0 |      475.601  |          175 |         2986 |         706   |        850    |       1281    |      2.09582 |                306.716 |           0.922775 |     5588.7 |     5019.1 |     4608.3 |      45.3 |      19.8 |      12.5 |
| [qgis310-balanced > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment-sequential/20201101-093242/qgis310-balanced/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)                                     | somap_grundplanav_farbig > av_f_big.txt |                429.4 | +21.3%                       |          422.7 | +21.7%                 |           543   | +35.8%                  |           735 |            0 |          0 |      575.146  |          172 |         2984 |         811   |        985.6  |       1772.28 |      1.7341  |                253.78  |           0.763512 |     5818.8 |     5208.6 |     4671.5 |      32.1 |      16.5 |      12.4 |
| [qgis310-singlethread-multiinstance > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment-sequential/20201101-093242/qgis310-singlethread-multiinstance/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |                540.1 | +52.6%                       |          533.3 | +53.6%                 |           716   | +79.0%                  |           735 |            0 |          0 |      725.629  |          171 |         3329 |        1058.6 |       1264    |       2725.2  |      1.37522 |                201.259 |           0.605502 |     6167.6 |     5481.9 |     4877.9 |      34.7 |      13   |      11.9 |
| [qgis310-multithread-singleinstance > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201101-093242/qgis310-multithread-singleinstance/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)               | somap_grundplanav_sw > av_sw.txt        |                 18.5 | +0.0%                        |           12.4 | +0.0%                  |           392   | +4.0%                   |            20 |            0 |          0 |      621.3    |          214 |         2328 |        1283.6 |       2276.8  |       2328    |      1.60231 |                498.554 |           0.670966 |     4915.1 |     4741.6 |     4668.7 |      34.7 |      19.3 |      13   |
| [qgis310-unlimited-threads > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201101-093242/qgis310-unlimited-threads/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)                                 | somap_grundplanav_sw > av_sw.txt        |                 18.8 | +1.6%                        |           12.7 | +2.2%                  |           377   | +0.0%                   |            20 |            0 |          0 |      635.25   |          227 |         2415 |        1310.8 |       2360.1  |       2415    |      1.56728 |                487.654 |           0.656297 |     5220.5 |     5036.4 |     4971.3 |      27.2 |      19   |      15.2 |
| [qgis310-balanced > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201101-093242/qgis310-balanced/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)                                                   | somap_grundplanav_sw > av_sw.txt        |                 20   | +8.1%                        |           14   | +12.9%                 |           469.5 | +24.5%                  |            20 |            0 |          0 |      701.55   |          228 |         2646 |        1392.9 |       2583.75 |       2646    |      1.41945 |                441.658 |           0.594393 |     5129.8 |     4958.5 |     4888.4 |      33.5 |      18.1 |      13.4 |
| [qgis310-singlethread-multiinstance > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-deployment-sequential/20201101-093242/qgis310-singlethread-multiinstance/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)               | somap_grundplanav_sw > av_sw.txt        |                 21.2 | +14.6%                       |           15.3 | +22.7%                 |           566   | +50.1%                  |            20 |            0 |          0 |      762.55   |          207 |         2444 |        1661.1 |       2405.45 |       2444    |      1.30625 |                406.437 |           0.546992 |     5473.6 |     5279.7 |     5227.5 |      34.7 |      16.2 |      12.5 |
| [qgis310-unlimited-threads > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201101-093242/qgis310-unlimited-threads/somap310_lk/lk.txt/dashboard/index.html)                                                               | somap_lk > lk.txt                       |                  8.3 | +0.0%                        |            2.5 | +0.6%                  |            79.5 | +0.0%                   |            30 |            0 |          0 |       84.9333 |           55 |          239 |          91.6 |        162    |        239    |     11.5696  |                313.616 |           4.71974  |     4700.1 |     4691.6 |     4675   |      35   |      26.7 |      18.7 |
| [qgis310-multithread-singleinstance > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201101-093242/qgis310-multithread-singleinstance/somap310_lk/lk.txt/dashboard/index.html)                                             | somap_lk > lk.txt                       |                  8.6 | +3.6%                        |            2.5 | +0.0%                  |            79.5 | +0.0%                   |            30 |            0 |          0 |       84.4667 |           54 |          250 |          92   |        164.2  |        250    |     11.5785  |                313.858 |           4.72338  |     4609.1 |     4582.7 |     4552.1 |      36.2 |      28.6 |      20.1 |
| [qgis310-balanced > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201101-093242/qgis310-balanced/somap310_lk/lk.txt/dashboard/index.html)                                                                                 | somap_lk > lk.txt                       |                  8.6 | +3.6%                        |            3   | +17.2%                 |            94.5 | +18.9%                  |            30 |            0 |          0 |       99      |           56 |          249 |         112.6 |        174.2  |        249    |      9.9272  |                269.095 |           4.04973  |     4699.2 |     4694.9 |     4690.5 |      31.7 |      25.3 |      18.9 |
| [qgis310-singlethread-multiinstance > somap310_lk > lk.txt](../results/details/compare-deployment-sequential/20201101-093242/qgis310-singlethread-multiinstance/somap310_lk/lk.txt/dashboard/index.html)                                             | somap_lk > lk.txt                       |                  9.3 | +12.0%                       |            3.4 | +34.3%                 |           108   | +35.8%                  |            30 |            0 |          0 |      113.4    |           60 |          289 |         127.6 |        206.5  |        289    |      8.68307 |                235.371 |           3.54219  |     4863.1 |     4853   |     4847.6 |      30.1 |      20.5 |      14.4 |

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
        - av_f_big.txt
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
      - av_f_big.txt
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
      - av_f_big.txt
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
      - av_f_big.txt
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
      - av_f_big.txt
      somap310_grundplanav_sw:
      - av_sw.txt
      somap310_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx

```