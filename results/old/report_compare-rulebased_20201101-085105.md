# QGIS Benchmark summary compare-rulebased (20201101-085105)


compare rulebased rendering on different version of QGIS servers using the same settings

_run completed in 00h 09m 12s_

_Sample size per configuration 5190_
## Summary plot
An interactive summary plot can be found [here](report_compare-rulebased_20201101-085105_plot.html)

## Summary
| name          | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock | Global  |                132.3 | +0.0%                        |         1250.7 | +0.0%                  |           147.5 | +0.0%                   |           28 |         2094 |          5190 |            0 |     8691.1 |     7558.8 |     4766   |      99.9 |      98.4 |      34   |          0 |
| qgis316-stock | Global  |                169.7 | +28.3%                       |         1622.4 | +29.7%                 |           212.5 | +44.1%                  |            5 |         1882 |          5190 |            0 |     8332.5 |     7352.4 |     4957.8 |      87.9 |      73.5 |      39.3 |          0 |
| qgis310-stock | Global  |                189.7 | +43.4%                       |         1817.2 | +45.3%                 |           252   | +70.8%                  |           31 |         2258 |          5190 |            0 |     8321   |     7340.6 |     4990.1 |      91.4 |      74.6 |      47.6 |          0 |

## Aggregated
| name                                             | group                         |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|--------------------------------------------------|-------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock > somap218_avbobe_farbig_rulebased | somap_avbobe_farbig_rulebased |                132.3 | +0.0%                        |         1250.7 | +0.0%                  |           147.5 | +0.0%                   |           28 |         2094 |          5190 |            0 |     8691.1 |     7558.8 |     4766   |      99.9 |      98.4 |      34   |          0 |
| qgis316-stock > somap316_avbobe_farbig_rulebased | somap_avbobe_farbig_rulebased |                169.7 | +28.3%                       |         1622.4 | +29.7%                 |           212.5 | +44.1%                  |            5 |         1882 |          5190 |            0 |     8332.5 |     7352.4 |     4957.8 |      87.9 |      73.5 |      39.3 |          0 |
| qgis310-stock > somap310_avbobe_farbig_rulebased | somap_avbobe_farbig_rulebased |                189.7 | +43.4%                       |         1817.2 | +45.3%                 |           252   | +70.8%                  |           31 |         2258 |          5190 |            0 |     8321   |     7340.6 |     4990.1 |      91.4 |      74.6 |      47.6 |          0 |

## Detail
| name                                                                                                                                                                                                                         | group                                                  |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218-stock > somap218_avbobe_farbig_rulebased > bodenbedeckung_big.txt](../results/details/compare-rulebased/20201101-085105/qgis218-stock/somap218_avbobe_farbig_rulebased/bodenbedeckung_big.txt/dashboard/index.html) | somap_avbobe_farbig_rulebased > bodenbedeckung_big.txt |                132.3 | +0.0%                        |         1250.7 | +0.0%                  |           147.5 | +0.0%                   |          5190 |            0 |          0 |       240.992 |           28 |         2094 |         567.9 |        675.45 |        923.36 |      41.0708 |                7848.01 |            18.4399 |     8691.1 |     7558.8 |     4766   |      99.9 |      98.4 |      34   |
| [qgis316-stock > somap316_avbobe_farbig_rulebased > bodenbedeckung_big.txt](../results/details/compare-rulebased/20201101-085105/qgis316-stock/somap316_avbobe_farbig_rulebased/bodenbedeckung_big.txt/dashboard/index.html) | somap_avbobe_farbig_rulebased > bodenbedeckung_big.txt |                169.7 | +28.3%                       |         1622.4 | +29.7%                 |           212.5 | +44.1%                  |          5190 |            0 |          0 |       312.598 |            5 |         1882 |         722   |        916.35 |       1303.45 |      31.7067 |                6053.72 |            14.2356 |     8332.5 |     7352.4 |     4957.8 |      87.9 |      73.5 |      39.3 |
| [qgis310-stock > somap310_avbobe_farbig_rulebased > bodenbedeckung_big.txt](../results/details/compare-rulebased/20201101-085105/qgis310-stock/somap310_avbobe_farbig_rulebased/bodenbedeckung_big.txt/dashboard/index.html) | somap_avbobe_farbig_rulebased > bodenbedeckung_big.txt |                189.7 | +43.4%                       |         1817.2 | +45.3%                 |           252   | +70.8%                  |          5190 |            0 |          0 |       350.142 |           31 |         2258 |         744.9 |        935.35 |       1375.09 |      28.2862 |                5400.68 |            12.6998 |     8321   |     7340.6 |     4990.1 |      91.4 |      74.6 |      47.6 |

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
description: 'compare rulebased rendering on different version of QGIS servers using the same settings'

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
      somap218_avbobe_farbig_rulebased:
        - bodenbedeckung_big.txt

  qgis310-stock:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
    projects:
      somap310_avbobe_farbig_rulebased:
        - bodenbedeckung_big.txt

  qgis316-stock:
    active: yes
    inherit: qgis310-stock
    compose-variables:
      QGIS_VERSION: '3.16'
    projects:
      somap316_avbobe_farbig_rulebased:
        - bodenbedeckung_big.txt

```
### parsed test configurations

```
description: compare rulebased rendering on different version of QGIS servers using
  the same settings
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
      somap218_avbobe_farbig_rulebased:
      - bodenbedeckung_big.txt
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
      somap310_avbobe_farbig_rulebased:
      - bodenbedeckung_big.txt
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
      somap316_avbobe_farbig_rulebased:
      - bodenbedeckung_big.txt
    template: docker-compose-qgis-3-nginx

```