# QGIS Benchmark summary compare-av-ohnelabel (20201103-073111)


compare rendering with no labels on different version of QGIS servers using the same settings

_run completed in 00h 04m 15s_

_Sample size per configuration 735_
## Summary plot
An interactive summary plot can be found [here](report_compare-av-ohnelabel_20201103-073111_plot.html)

## Summary
| name          | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock | Global  |                 45.7 | +0.0%                        |          394.2 | +0.0%                  |             485 | +0.0%                   |          179 |         3187 |            116.4 |           735 |            0 |     3753.2 |     3347.9 |     2524.6 |      98.5 |      93.9 |      11.5 |          0 |
| qgis316-stock | Global  |                 52   | +13.8%                       |          453.8 | +15.1%                 |             618 | +27.4%                  |            7 |         2143 |             99.4 |           735 |            0 |     4127.7 |     3493   |     2897.8 |      90.2 |      73.1 |      18.3 |          0 |
| qgis310-stock | Global  |                 66.6 | +45.7%                       |          600   | +52.2%                 |             812 | +67.4%                  |          142 |         2037 |             99.4 |           735 |            0 |     3950.7 |     3394.6 |     2810.2 |      91   |      73.4 |      18.7 |          0 |

## Aggregated
| name                                                    | group                                |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------------------------------------------------|--------------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock > somap218_grundplanav_farbig_ohne_labels | somap_grundplanav_farbig_ohne_labels |                 45.7 | +0.0%                        |          394.2 | +0.0%                  |             485 | +0.0%                   |          179 |         3187 |            116.4 |           735 |            0 |     3753.2 |     3347.9 |     2524.6 |      98.5 |      93.9 |      11.5 |          0 |
| qgis316-stock > somap316_grundplanav_farbig_ohne_labels | somap_grundplanav_farbig_ohne_labels |                 52   | +13.8%                       |          453.8 | +15.1%                 |             618 | +27.4%                  |            7 |         2143 |             99.4 |           735 |            0 |     4127.7 |     3493   |     2897.8 |      90.2 |      73.1 |      18.3 |          0 |
| qgis310-stock > somap310_grundplanav_farbig_ohne_labels | somap_grundplanav_farbig_ohne_labels |                 66.6 | +45.7%                       |          600   | +52.2%                 |             812 | +67.4%                  |          142 |         2037 |             99.4 |           735 |            0 |     3950.7 |     3394.6 |     2810.2 |      91   |      73.4 |      18.7 |          0 |

## Detail
| name                                                                                                                                                                                                                      | group                                               |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218-stock > somap218_grundplanav_farbig_ohne_labels > av_f_big.txt](../results/details/compare-av-ohnelabel/20201103-073111/qgis218-stock/somap218_grundplanav_farbig_ohne_labels/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig_ohne_labels > av_f_big.txt |                 45.7 | +0.0%                        |          394.2 | +0.0%                  |             485 | +0.0%                   |           735 |            0 |          0 |       536.332 |          179 |         3187 |         777.8 |         920.8 |       1559.2  |      18.3718 |                2979.04 |            8.30426 |            116.4 |     3753.2 |     3347.9 |     2524.6 |      98.5 |      93.9 |      11.5 |
| [qgis316-stock > somap316_grundplanav_farbig_ohne_labels > av_f_big.txt](../results/details/compare-av-ohnelabel/20201103-073111/qgis316-stock/somap316_grundplanav_farbig_ohne_labels/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig_ohne_labels > av_f_big.txt |                 52   | +13.8%                       |          453.8 | +15.1%                 |             618 | +27.4%                  |           735 |            0 |          0 |       617.37  |            7 |         2143 |        1019.2 |        1131.6 |       1493.12 |      15.9087 |                2202.58 |            7.19094 |             99.4 |     4127.7 |     3493   |     2897.8 |      90.2 |      73.1 |      18.3 |
| [qgis310-stock > somap310_grundplanav_farbig_ohne_labels > av_f_big.txt](../results/details/compare-av-ohnelabel/20201103-073111/qgis310-stock/somap310_grundplanav_farbig_ohne_labels/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig_ohne_labels > av_f_big.txt |                 66.6 | +45.7%                       |          600   | +52.2%                 |             812 | +67.4%                  |           735 |            0 |          0 |       816.333 |          142 |         2037 |        1248   |        1310.4 |       1603.92 |      12.0632 |                1670.36 |            5.45272 |             99.4 |     3950.7 |     3394.6 |     2810.2 |      91   |      73.4 |      18.7 |

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
      QGIS_REPLICAS: '6'
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