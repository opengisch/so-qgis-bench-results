# QGIS Benchmark summary compare-av-ohnelabel (20201101-081752)


compare rendering with no labels on different version of QGIS servers using the same settings

_run completed in 00h 03m 52s_

_Sample size per configuration 735_
## Summary plot
An interactive summary plot can be found [here](report_compare-av-ohnelabel_20201101-081752_plot.html)

## Summary
| name          | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock | Global  |                 44.8 | +0.0%                        |          387.4 | +0.0%                  |             479 | +0.0%                   |          177 |         3064 |           735 |            0 |     6082.5 |     5681   |     4800.7 |      98.7 |      95.6 |      41   |          0 |
| qgis316-stock | Global  |                 54.7 | +22.1%                       |          480   | +23.9%                 |             632 | +31.9%                  |            6 |         2778 |           735 |            0 |     6436.6 |     5848.9 |     5198.1 |      95.7 |      71.6 |      50.5 |          0 |
| qgis310-stock | Global  |                 67.5 | +50.7%                       |          611.5 | +57.9%                 |             823 | +71.8%                  |          138 |         3211 |           735 |            0 |     6345   |     5706.2 |     5114.2 |      93.2 |      74.5 |      54.2 |          0 |

## Aggregated
| name                                                    | group                                |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------------------------------------------------|--------------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock > somap218_grundplanav_farbig_ohne_labels | somap_grundplanav_farbig_ohne_labels |                 44.8 | +0.0%                        |          387.4 | +0.0%                  |             479 | +0.0%                   |          177 |         3064 |           735 |            0 |     6082.5 |     5681   |     4800.7 |      98.7 |      95.6 |      41   |          0 |
| qgis316-stock > somap316_grundplanav_farbig_ohne_labels | somap_grundplanav_farbig_ohne_labels |                 54.7 | +22.1%                       |          480   | +23.9%                 |             632 | +31.9%                  |            6 |         2778 |           735 |            0 |     6436.6 |     5848.9 |     5198.1 |      95.7 |      71.6 |      50.5 |          0 |
| qgis310-stock > somap310_grundplanav_farbig_ohne_labels | somap_grundplanav_farbig_ohne_labels |                 67.5 | +50.7%                       |          611.5 | +57.9%                 |             823 | +71.8%                  |          138 |         3211 |           735 |            0 |     6345   |     5706.2 |     5114.2 |      93.2 |      74.5 |      54.2 |          0 |

## Detail
| name                                                                                                                                                                                                                      | group                                               |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218-stock > somap218_grundplanav_farbig_ohne_labels > av_f_big.txt](../results/details/compare-av-ohnelabel/20201101-081752/qgis218-stock/somap218_grundplanav_farbig_ohne_labels/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig_ohne_labels > av_f_big.txt |                 44.8 | +0.0%                        |          387.4 | +0.0%                  |             479 | +0.0%                   |           735 |            0 |          0 |       527.027 |          177 |         3064 |         753   |         946.2 |       1556.04 |      18.6705 |                3027.47 |            8.43926 |     6082.5 |     5681   |     4800.7 |      98.7 |      95.6 |      41   |
| [qgis316-stock > somap316_grundplanav_farbig_ohne_labels > av_f_big.txt](../results/details/compare-av-ohnelabel/20201101-081752/qgis316-stock/somap316_grundplanav_farbig_ohne_labels/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig_ohne_labels > av_f_big.txt |                 54.7 | +22.1%                       |          480   | +23.9%                 |             632 | +31.9%                  |           735 |            0 |          0 |       653.086 |            6 |         2778 |        1034.8 |        1174   |       1968.32 |      15.0104 |                2078.21 |            6.78488 |     6436.6 |     5848.9 |     5198.1 |      95.7 |      71.6 |      50.5 |
| [qgis310-stock > somap310_grundplanav_farbig_ohne_labels > av_f_big.txt](../results/details/compare-av-ohnelabel/20201101-081752/qgis310-stock/somap310_grundplanav_farbig_ohne_labels/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig_ohne_labels > av_f_big.txt |                 67.5 | +50.7%                       |          611.5 | +57.9%                 |             823 | +71.8%                  |           735 |            0 |          0 |       831.967 |          138 |         3211 |        1251.2 |        1368.2 |       2276.8  |      11.8472 |                1640.45 |            5.35507 |     6345   |     5706.2 |     5114.2 |      93.2 |      74.5 |      54.2 |

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