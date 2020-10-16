# QGIS Benchmark summary compare-av-ohnelabel (20201015-234328)


compare rendering with no labels on different version of QGIS servers using the same settings

_run completed in 00h 02m 59s_
## Summary plot
An interactive summary plot can be found [here](report_compare-av-ohnelabel_20201015-234328_plot.html)

## Summary
| name          | group   |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------|---------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock | Global  |        377.8 |               0   |           735 |            0 |     3976.7 |     3572.6 |     2797.7 |      98.8 |      94.8 |      14.3 |          0 |
| qgis310-stock | Global  |        597.4 |              58.1 |           735 |            0 |     3980.5 |     3567   |     2774.6 |      97.8 |      73.4 |      15.9 |          0 |
| qgis314-stock | Global  |        629.6 |              66.7 |           735 |            0 |     4168.8 |     3576.3 |     2972.5 |      96.2 |      71.9 |      16.8 |          0 |

## Aggregated
| name                                                    | group                                |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------------------------------------------------|--------------------------------------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock > somap218_grundplanav_farbig_ohne_labels | somap_grundplanav_farbig_ohne_labels |        377.8 |               0   |           735 |            0 |     3976.7 |     3572.6 |     2797.7 |      98.8 |      94.8 |      14.3 |          0 |
| qgis310-stock > somap310_grundplanav_farbig_ohne_labels | somap_grundplanav_farbig_ohne_labels |        597.4 |              58.1 |           735 |            0 |     3980.5 |     3567   |     2774.6 |      97.8 |      73.4 |      15.9 |          0 |
| qgis314-stock > somap314_grundplanav_farbig_ohne_labels | somap_grundplanav_farbig_ohne_labels |        629.6 |              66.7 |           735 |            0 |     4168.8 |     3576.3 |     2972.5 |      96.2 |      71.9 |      16.8 |          0 |

## Detail
| name                                                                                                                                                                                                                      | group                                               |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218-stock > somap218_grundplanav_farbig_ohne_labels > av_f_big.txt](../results/details/compare-av-ohnelabel/20201015-234328/qgis218-stock/somap218_grundplanav_farbig_ohne_labels/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig_ohne_labels > av_f_big.txt |        377.8 |               0   |           735 |            0 |          0 |       513.981 |             462 |          177 |         3378 |         743   |         961.4 |       1574.08 |      19.1481 |                3104.92 |            8.65517 |     3976.7 |     3572.6 |     2797.7 |      98.8 |      94.8 |      14.3 |
| [qgis310-stock > somap310_grundplanav_farbig_ohne_labels > av_f_big.txt](../results/details/compare-av-ohnelabel/20201015-234328/qgis310-stock/somap310_grundplanav_farbig_ohne_labels/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig_ohne_labels > av_f_big.txt |        597.4 |              58.1 |           735 |            0 |          0 |       812.776 |             822 |          131 |         2735 |        1201   |        1383.6 |       2161.92 |      12.095  |                1674.75 |            5.46707 |     3980.5 |     3567   |     2774.6 |      97.8 |      73.4 |      15.9 |
| [qgis314-stock > somap314_grundplanav_farbig_ohne_labels > av_f_big.txt](../results/details/compare-av-ohnelabel/20201015-234328/qgis314-stock/somap314_grundplanav_farbig_ohne_labels/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig_ohne_labels > av_f_big.txt |        629.6 |              66.7 |           735 |            0 |          0 |       856.562 |             866 |          121 |         2964 |        1253.8 |        1388.2 |       2007.68 |      11.4905 |                1590.97 |            5.19383 |     4168.8 |     3576.3 |     2972.5 |      96.2 |      71.9 |      16.8 |

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
description: 'compare rendering with no labels on different version of QGIS servers using the same settings'

test-cases:
  base:
    active: no
    compose-variables:
      QGIS_REPLICAS: '6'
      QGIS_MAX_CACHE_LAYERS: '50'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_SERVER_MAX_THREADS: '1' #QGIS3
      QGIS_FCGI_PROCESSES: '1' #QGIS2

      PG_SERVICE: 'pg_service.conf'


  qgis218-stock:
    active: yes
    inherit: base
    template: docker-compose-qgis-2
    path-prefix: 'ows'
    projects:
      somap218_grundplanav_farbig_ohne_labels:
        - av_f_big.txt

  qgis310-stock:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
    projects:
      somap310_grundplanav_farbig_ohne_labels:
        - av_f_big.txt

  qgis314-stock:
    active: yes
    inherit: qgis310-stock
    compose-variables:
      QGIS_VERSION: '3.14'
    projects:
      somap314_grundplanav_farbig_ohne_labels:
        - av_f_big.txt

```
### parsed test configurations

```
description: compare rendering with no labels on different version of QGIS servers
  using the same settings
test-cases:
  base:
    active: false
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '50'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
  qgis218-stock:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '50'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
    inherit: base
    path-prefix: ows
    projects:
      somap218_grundplanav_farbig_ohne_labels:
      - av_f_big.txt
    template: docker-compose-qgis-2
  qgis310-stock:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '50'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_VERSION: '3.10'
    inherit: base
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig_ohne_labels:
      - av_f_big.txt
    template: docker-compose-qgis-3-nginx
  qgis314-stock:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '50'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_VERSION: '3.14'
    inherit: qgis310-stock
    path-prefix: ogc
    projects:
      somap314_grundplanav_farbig_ohne_labels:
      - av_f_big.txt
    template: docker-compose-qgis-3-nginx

```