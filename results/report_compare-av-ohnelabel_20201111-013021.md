# QGIS Benchmark summary compare-av-ohnelabel (20201111-013021)


compare rendering with no labels on different version of QGIS servers using the same settings

_run completed in 00h 04m 01s_

_Sample size per configuration 735_
## Summary plot
An interactive summary plot can be found [here](report_compare-av-ohnelabel_20201111-013021_plot.html)

## Summary
| name          | group   |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------|---------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock | Global  |             42.9 | +0.0%                    |               8   | +8.1%                     |          367.3 | +0.0%                  |             458 | +0.0%                   |          175 |         2883 |            116.4 |           735 |            0 |     4395.3 |     3988.1 |     3230.5 |      98.7 |      94.4 |      11.5 |          0 |
| qgis316-stock | Global  |             49.7 | +15.9%                   |               7.4 | +0.0%                     |          435.8 | +18.6%                 |             594 | +29.7%                  |            6 |         2060 |             99.4 |           735 |            0 |     4714.9 |     4117.3 |     3514.6 |      90   |      73.1 |      17.9 |          0 |
| qgis310-stock | Global  |             62.7 | +46.2%                   |              11.8 | +59.5%                    |          564.7 | +53.7%                 |             772 | +68.6%                  |          125 |         2187 |             99.4 |           735 |            0 |     4498.9 |     3981.2 |     3352.8 |      89.7 |      73.1 |      18.1 |          0 |

## Aggregated
| name                                                    | group                                |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------------------------------------------------|--------------------------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock > somap218_grundplanav_farbig_ohne_labels | somap_grundplanav_farbig_ohne_labels |             42.9 | +0.0%                    |               8   | +8.1%                     |          367.3 | +0.0%                  |             458 | +0.0%                   |          175 |         2883 |            116.4 |           735 |            0 |     4395.3 |     3988.1 |     3230.5 |      98.7 |      94.4 |      11.5 |          0 |
| qgis316-stock > somap316_grundplanav_farbig_ohne_labels | somap_grundplanav_farbig_ohne_labels |             49.7 | +15.9%                   |               7.4 | +0.0%                     |          435.8 | +18.6%                 |             594 | +29.7%                  |            6 |         2060 |             99.4 |           735 |            0 |     4714.9 |     4117.3 |     3514.6 |      90   |      73.1 |      17.9 |          0 |
| qgis310-stock > somap310_grundplanav_farbig_ohne_labels | somap_grundplanav_farbig_ohne_labels |             62.7 | +46.2%                   |              11.8 | +59.5%                    |          564.7 | +53.7%                 |             772 | +68.6%                  |          125 |         2187 |             99.4 |           735 |            0 |     4498.9 |     3981.2 |     3352.8 |      89.7 |      73.1 |      18.1 |          0 |

## Detail
| name                                                                                                                                                                                                                      | group                                               |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218-stock > somap218_grundplanav_farbig_ohne_labels > av_f_big.txt](../results/details/compare-av-ohnelabel/20201111-013021/qgis218-stock/somap218_grundplanav_farbig_ohne_labels/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig_ohne_labels > av_f_big.txt |             42.9 | +0.0%                    |               8   | +8.1%                     |          367.3 | +0.0%                  |             458 | +0.0%                   |           735 |            0 |          0 |       499.789 |          175 |         2883 |         713.6 |         929.4 |       1286.96 |      19.6624 |                3189.22 |            8.88763 |            116.4 |     4395.3 |     3988.1 |     3230.5 |      98.7 |      94.4 |      11.5 |
| [qgis316-stock > somap316_grundplanav_farbig_ohne_labels > av_f_big.txt](../results/details/compare-av-ohnelabel/20201111-013021/qgis316-stock/somap316_grundplanav_farbig_ohne_labels/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig_ohne_labels > av_f_big.txt |             49.7 | +15.9%                   |               7.4 | +0.0%                     |          435.8 | +18.6%                 |             594 | +29.7%                  |           735 |            0 |          0 |       592.865 |            6 |         2060 |         969.4 |        1058.8 |       1529.48 |      16.609  |                2300.19 |            7.50748 |             99.4 |     4714.9 |     4117.3 |     3514.6 |      90   |      73.1 |      17.9 |
| [qgis310-stock > somap310_grundplanav_farbig_ohne_labels > av_f_big.txt](../results/details/compare-av-ohnelabel/20201111-013021/qgis310-stock/somap310_grundplanav_farbig_ohne_labels/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig_ohne_labels > av_f_big.txt |             62.7 | +46.2%                   |              11.8 | +59.5%                    |          564.7 | +53.7%                 |             772 | +68.6%                  |           735 |            0 |          0 |       768.35  |          125 |         2187 |        1151.4 |        1244.4 |       1442.56 |      12.7846 |                1770.75 |            5.77879 |             99.4 |     4498.9 |     3981.2 |     3352.8 |      89.7 |      73.1 |      18.1 |

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
      QGIS_VERSION: '3.10-ubuntu'
    projects:
      somap310_grundplanav_farbig_ohne_labels:
        - av_f_big.txt

  qgis316-stock:
    active: yes
    inherit: qgis310-stock
    compose-variables:
      QGIS_VERSION: '3.16-ubuntu'
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
      QGIS_REPLICAS: '6'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
  qgis218-stock:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '6'
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
      QGIS_REPLICAS: '6'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_VERSION: 3.10-ubuntu
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
      QGIS_REPLICAS: '6'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_VERSION: 3.16-ubuntu
    inherit: qgis310-stock
    path-prefix: ogc
    projects:
      somap316_grundplanav_farbig_ohne_labels:
      - av_f_big.txt
    template: docker-compose-qgis-3-nginx

```