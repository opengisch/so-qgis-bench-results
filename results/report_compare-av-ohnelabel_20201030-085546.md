# QGIS Benchmark summary compare-av-ohnelabel (20201030-085546)


compare rendering with no labels on different version of QGIS servers using the same settings

_run completed in 00h 03m 53s_

_Sample size per configuration 735_
## Summary plot
An interactive summary plot can be found [here](report_compare-av-ohnelabel_20201030-085546_plot.html)

## Summary
| name          | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock | Global  |                 47   | +0.0%                        |          406.1 | +0.0%                  |             497 | +0.0%                   |          173 |         2968 |           735 |            0 |     5448.8 |     4997   |     4036.7 |      98.6 |      94.6 |      34.7 |          0 |
| qgis316-stock | Global  |                 54.3 | +15.5%                       |          476.6 | +17.4%                 |             627 | +26.2%                  |            6 |         2442 |           735 |            0 |     5686.8 |     5149.9 |     4419.9 |      91.4 |      73.4 |      44.8 |          0 |
| qgis310-stock | Global  |                 68.8 | +46.4%                       |          623.3 | +53.5%                 |             844 | +69.8%                  |          139 |         2964 |           735 |            0 |     5645.1 |     5049.9 |     4397.9 |      93.1 |      74.6 |      48.7 |          0 |

## Aggregated
| name                                                    | group                                |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------------------------------------------------|--------------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock > somap218_grundplanav_farbig_ohne_labels | somap_grundplanav_farbig_ohne_labels |                 47   | +0.0%                        |          406.1 | +0.0%                  |             497 | +0.0%                   |          173 |         2968 |           735 |            0 |     5448.8 |     4997   |     4036.7 |      98.6 |      94.6 |      34.7 |          0 |
| qgis316-stock > somap316_grundplanav_farbig_ohne_labels | somap_grundplanav_farbig_ohne_labels |                 54.3 | +15.5%                       |          476.6 | +17.4%                 |             627 | +26.2%                  |            6 |         2442 |           735 |            0 |     5686.8 |     5149.9 |     4419.9 |      91.4 |      73.4 |      44.8 |          0 |
| qgis310-stock > somap310_grundplanav_farbig_ohne_labels | somap_grundplanav_farbig_ohne_labels |                 68.8 | +46.4%                       |          623.3 | +53.5%                 |             844 | +69.8%                  |          139 |         2964 |           735 |            0 |     5645.1 |     5049.9 |     4397.9 |      93.1 |      74.6 |      48.7 |          0 |

## Detail
| name                                                                                                                                                                                                                      | group                                               |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218-stock > somap218_grundplanav_farbig_ohne_labels > av_f_big.txt](../results/details/compare-av-ohnelabel/20201030-085546/qgis218-stock/somap218_grundplanav_farbig_ohne_labels/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig_ohne_labels > av_f_big.txt |                 47   | +0.0%                        |          406.1 | +0.0%                  |             497 | +0.0%                   |           735 |            0 |          0 |       552.555 |          173 |         2968 |         821.2 |         989.4 |       1620.32 |      17.8091 |                2887.8  |            8.04993 |     5448.8 |     4997   |     4036.7 |      98.6 |      94.6 |      34.7 |
| [qgis316-stock > somap316_grundplanav_farbig_ohne_labels > av_f_big.txt](../results/details/compare-av-ohnelabel/20201030-085546/qgis316-stock/somap316_grundplanav_farbig_ohne_labels/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig_ohne_labels > av_f_big.txt |                 54.3 | +15.5%                       |          476.6 | +17.4%                 |             627 | +26.2%                  |           735 |            0 |          0 |       648.497 |            6 |         2442 |        1056.4 |        1151.8 |       2109.76 |      15.1759 |                2101.12 |            6.85969 |     5686.8 |     5149.9 |     4419.9 |      91.4 |      73.4 |      44.8 |
| [qgis310-stock > somap310_grundplanav_farbig_ohne_labels > av_f_big.txt](../results/details/compare-av-ohnelabel/20201030-085546/qgis310-stock/somap310_grundplanav_farbig_ohne_labels/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig_ohne_labels > av_f_big.txt |                 68.8 | +46.4%                       |          623.3 | +53.5%                 |             844 | +69.8%                  |           735 |            0 |          0 |       848.011 |          139 |         2964 |        1279.2 |        1394.4 |       2428.92 |      11.685  |                1617.99 |            5.28177 |     5645.1 |     5049.9 |     4397.9 |      93.1 |      74.6 |      48.7 |

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

  qgis316-stock:
    active: yes
    inherit: qgis310-stock
    compose-variables:
      QGIS_VERSION: '3.16'
    projects:
      somap316_grundplanav_farbig_ohne_labels:
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
  qgis316-stock:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '50'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_VERSION: '3.16'
    inherit: qgis310-stock
    path-prefix: ogc
    projects:
      somap316_grundplanav_farbig_ohne_labels:
      - av_f_big.txt
    template: docker-compose-qgis-3-nginx

```