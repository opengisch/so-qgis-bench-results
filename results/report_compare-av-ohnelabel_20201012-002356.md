# QGIS Benchmark summary compare-av-ohnelabel (20201012-002356)


compare rendering with no labels on different version of QGIS servers using the same settings

_run completed in 00h 02m 57s_
## Summary plot
An interactive summary plot can be found [here](report_compare-av-ohnelabel_20201012-002356_plot.html)

## Summary
| name          | group   |   duration s |   group penalty % |   sampleCount |   errorCount |   memMinMB |   memMaxMB |   memAvgMB |   cpuMin% |   cpuMax% |   cpuAvg% |   errorPct |
|---------------|---------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock | Global  |        374.3 |               0   |           735 |            0 |          0 |     3679.9 |     3254.2 |         0 |      98.6 |      94.2 |          0 |
| qgis310-stock | Global  |        587   |              56.8 |           735 |            0 |          0 |     3976.8 |     3240.6 |         0 |      96.4 |      73.8 |          0 |
| qgis314-stock | Global  |        619   |              65.4 |           735 |            0 |          0 |     3811.5 |     3257.9 |         0 |      93.7 |      73.9 |          0 |

## Aggregated
| name                                                    | group                                |   duration s |   group penalty % |   sampleCount |   errorCount |   memMinMB |   memMaxMB |   memAvgMB |   cpuMin% |   cpuMax% |   cpuAvg% |   errorPct |
|---------------------------------------------------------|--------------------------------------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock > somap218_grundplanav_farbig_ohne_labels | somap_grundplanav_farbig_ohne_labels |        374.3 |               0   |           735 |            0 |          0 |     3679.9 |     3254.2 |         0 |      98.6 |      94.2 |          0 |
| qgis310-stock > somap310_grundplanav_farbig_ohne_labels | somap_grundplanav_farbig_ohne_labels |        587   |              56.8 |           735 |            0 |          0 |     3976.8 |     3240.6 |         0 |      96.4 |      73.8 |          0 |
| qgis314-stock > somap314_grundplanav_farbig_ohne_labels | somap_grundplanav_farbig_ohne_labels |        619   |              65.4 |           735 |            0 |          0 |     3811.5 |     3257.9 |         0 |      93.7 |      73.9 |          0 |

## Detail
| name                                                                                                                                                                                                                      | group                                               |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218-stock > somap218_grundplanav_farbig_ohne_labels > av_f_big.txt](../results/details/compare-av-ohnelabel/20201012-002356/qgis218-stock/somap218_grundplanav_farbig_ohne_labels/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig_ohne_labels > av_f_big.txt |        374.3 |               0   |           735 |            0 |          0 |       509.23  |             459 |          181 |         3019 |         724.4 |         928   |       1524.8  |      19.3096 |                3131.11 |            8.72816 |     3679.9 |     3254.2 |     2315.1 |      98.6 |      94.2 |      12.7 |
| [qgis310-stock > somap310_grundplanav_farbig_ohne_labels > av_f_big.txt](../results/details/compare-av-ohnelabel/20201012-002356/qgis310-stock/somap310_grundplanav_farbig_ohne_labels/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig_ohne_labels > av_f_big.txt |        587   |              56.8 |           735 |            0 |          0 |       798.641 |             817 |          133 |         2788 |        1202.4 |        1297   |       2193.6  |      12.3304 |                1707.34 |            5.57346 |     3976.8 |     3240.6 |     2587.6 |      96.4 |      73.8 |      14.1 |
| [qgis314-stock > somap314_grundplanav_farbig_ohne_labels > av_f_big.txt](../results/details/compare-av-ohnelabel/20201012-002356/qgis314-stock/somap314_grundplanav_farbig_ohne_labels/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig_ohne_labels > av_f_big.txt |        619   |              65.4 |           735 |            0 |          0 |       842.174 |             818 |          130 |         2567 |        1258   |        1352.4 |       2067.76 |      11.6624 |                1614.78 |            5.27154 |     3811.5 |     3257.9 |     2697.6 |      93.7 |      73.9 |      16.1 |

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