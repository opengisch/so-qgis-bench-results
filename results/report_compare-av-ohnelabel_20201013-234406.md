# QGIS Benchmark summary compare-av-ohnelabel (20201013-234406)


compare rendering with no labels on different version of QGIS servers using the same settings

_run completed in 00h 03m 00s_
## Summary plot
An interactive summary plot can be found [here](report_compare-av-ohnelabel_20201013-234406_plot.html)

## Summary
| name          | group   |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------|---------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock | Global  |        381   |               0   |           735 |            0 |     3903   |     3505.6 |     2589.6 |      98.7 |      94   |      12.6 |          0 |
| qgis310-stock | Global  |        587.7 |              54.2 |           735 |            0 |     4279.8 |     3560.4 |     2785.4 |      99   |      73.6 |      16.9 |          0 |
| qgis314-stock | Global  |        636.4 |              67   |           735 |            0 |     4199.1 |     3547.6 |     2956.6 |      93.5 |      72.5 |      15.6 |          0 |

## Aggregated
| name                                                    | group                                |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------------------------------------------------|--------------------------------------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock > somap218_grundplanav_farbig_ohne_labels | somap_grundplanav_farbig_ohne_labels |        381   |               0   |           735 |            0 |     3903   |     3505.6 |     2589.6 |      98.7 |      94   |      12.6 |          0 |
| qgis310-stock > somap310_grundplanav_farbig_ohne_labels | somap_grundplanav_farbig_ohne_labels |        587.7 |              54.2 |           735 |            0 |     4279.8 |     3560.4 |     2785.4 |      99   |      73.6 |      16.9 |          0 |
| qgis314-stock > somap314_grundplanav_farbig_ohne_labels | somap_grundplanav_farbig_ohne_labels |        636.4 |              67   |           735 |            0 |     4199.1 |     3547.6 |     2956.6 |      93.5 |      72.5 |      15.6 |          0 |

## Detail
| name                                                                                                                                                                                                                      | group                                               |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218-stock > somap218_grundplanav_farbig_ohne_labels > av_f_big.txt](../results/details/compare-av-ohnelabel/20201013-234406/qgis218-stock/somap218_grundplanav_farbig_ohne_labels/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig_ohne_labels > av_f_big.txt |        381   |               0   |           735 |            0 |          0 |       518.426 |             462 |          179 |         2911 |         729   |         949.4 |       1564.92 |      18.978  |                3077.34 |            8.57829 |     3903   |     3505.6 |     2589.6 |      98.7 |      94   |      12.6 |
| [qgis310-stock > somap310_grundplanav_farbig_ohne_labels > av_f_big.txt](../results/details/compare-av-ohnelabel/20201013-234406/qgis310-stock/somap310_grundplanav_farbig_ohne_labels/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig_ohne_labels > av_f_big.txt |        587.7 |              54.2 |           735 |            0 |          0 |       799.638 |             791 |          129 |         2798 |        1190.4 |        1373   |       2083.24 |      12.1929 |                1688.3  |            5.51133 |     4279.8 |     3560.4 |     2785.4 |      99   |      73.6 |      16.9 |
| [qgis314-stock > somap314_grundplanav_farbig_ohne_labels > av_f_big.txt](../results/details/compare-av-ohnelabel/20201013-234406/qgis314-stock/somap314_grundplanav_farbig_ohne_labels/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig_ohne_labels > av_f_big.txt |        636.4 |              67   |           735 |            0 |          0 |       865.871 |             907 |          128 |         2802 |        1284.4 |        1412.2 |       2066.48 |      11.3767 |                1575.21 |            5.14238 |     4199.1 |     3547.6 |     2956.6 |      93.5 |      72.5 |      15.6 |

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