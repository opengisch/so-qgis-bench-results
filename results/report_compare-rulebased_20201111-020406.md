# QGIS Benchmark summary compare-rulebased (20201111-020406)


compare rulebased rendering on different version of QGIS servers using the same settings

_run completed in 00h 09m 02s_

_Sample size per configuration 5190_
## Summary plot
An interactive summary plot can be found [here](report_compare-rulebased_20201111-020406_plot.html)

## Summary
| name          | group   |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------|---------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock | Global  |            128.5 | +0.0%                    |               2.8 | +7.7%                     |         1214.9 | +0.0%                  |           144   | +0.0%                   |           28 |         2200 |            968.9 |          5190 |            0 |     5900.1 |     5224.7 |     3228.1 |      99.9 |      98.4 |      13.4 |          0 |
| qgis316-stock | Global  |            164.9 | +28.3%                   |               2.6 | +0.0%                     |         1573.7 | +29.5%                 |           198   | +37.5%                  |            4 |         2126 |            968.1 |          5190 |            0 |     5427.7 |     4971.8 |     3392.8 |      87.9 |      74.8 |      17.4 |          0 |
| qgis310-stock | Global  |            182.4 | +41.9%                   |               2.6 | +0.0%                     |         1750.7 | +44.1%                 |           249.5 | +73.3%                  |           30 |         1923 |            968.1 |          5190 |            0 |     5445.7 |     4961.7 |     3359.5 |      88.1 |      75   |      16.6 |          0 |

## Aggregated
| name                                             | group                         |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|--------------------------------------------------|-------------------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock > somap218_avbobe_farbig_rulebased | somap_avbobe_farbig_rulebased |            128.5 | +0.0%                    |               2.8 | +7.7%                     |         1214.9 | +0.0%                  |           144   | +0.0%                   |           28 |         2200 |            968.9 |          5190 |            0 |     5900.1 |     5224.7 |     3228.1 |      99.9 |      98.4 |      13.4 |          0 |
| qgis316-stock > somap316_avbobe_farbig_rulebased | somap_avbobe_farbig_rulebased |            164.9 | +28.3%                   |               2.6 | +0.0%                     |         1573.7 | +29.5%                 |           198   | +37.5%                  |            4 |         2126 |            968.1 |          5190 |            0 |     5427.7 |     4971.8 |     3392.8 |      87.9 |      74.8 |      17.4 |          0 |
| qgis310-stock > somap310_avbobe_farbig_rulebased | somap_avbobe_farbig_rulebased |            182.4 | +41.9%                   |               2.6 | +0.0%                     |         1750.7 | +44.1%                 |           249.5 | +73.3%                  |           30 |         1923 |            968.1 |          5190 |            0 |     5445.7 |     4961.7 |     3359.5 |      88.1 |      75   |      16.6 |          0 |

## Detail
| name                                                                                                                                                                                                                         | group                                                  |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218-stock > somap218_avbobe_farbig_rulebased > bodenbedeckung_big.txt](../results/details/compare-rulebased/20201111-020406/qgis218-stock/somap218_avbobe_farbig_rulebased/bodenbedeckung_big.txt/dashboard/index.html) | somap_avbobe_farbig_rulebased > bodenbedeckung_big.txt |            128.5 | +0.0%                    |               2.8 | +7.7%                     |         1214.9 | +0.0%                  |           144   | +0.0%                   |          5190 |            0 |          0 |       234.08  |           28 |         2200 |         546.9 |           648 |        923.26 |      42.2976 |                8085.54 |            18.9907 |            968.9 |     5900.1 |     5224.7 |     3228.1 |      99.9 |      98.4 |      13.4 |
| [qgis316-stock > somap316_avbobe_farbig_rulebased > bodenbedeckung_big.txt](../results/details/compare-rulebased/20201111-020406/qgis316-stock/somap316_avbobe_farbig_rulebased/bodenbedeckung_big.txt/dashboard/index.html) | somap_avbobe_farbig_rulebased > bodenbedeckung_big.txt |            164.9 | +28.3%                   |               2.6 | +0.0%                     |         1573.7 | +29.5%                 |           198   | +37.5%                  |          5190 |            0 |          0 |       303.225 |            4 |         2126 |         702.9 |           896 |       1279.36 |      32.6411 |                6234.61 |            14.6551 |            968.1 |     5427.7 |     4971.8 |     3392.8 |      87.9 |      74.8 |      17.4 |
| [qgis310-stock > somap310_avbobe_farbig_rulebased > bodenbedeckung_big.txt](../results/details/compare-rulebased/20201111-020406/qgis310-stock/somap310_avbobe_farbig_rulebased/bodenbedeckung_big.txt/dashboard/index.html) | somap_avbobe_farbig_rulebased > bodenbedeckung_big.txt |            182.4 | +41.9%                   |               2.6 | +0.0%                     |         1750.7 | +44.1%                 |           249.5 | +73.3%                  |          5190 |            0 |          0 |       337.321 |           30 |         1923 |         702.9 |           861 |       1180    |      29.4026 |                5616.01 |            13.2011 |            968.1 |     5445.7 |     4961.7 |     3359.5 |      88.1 |      75   |      16.6 |

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
      QGIS_VERSION: '3.10-ubuntu'
    projects:
      somap310_avbobe_farbig_rulebased:
        - bodenbedeckung_big.txt

  qgis316-stock:
    active: yes
    inherit: qgis310-stock
    compose-variables:
      QGIS_VERSION: '3.16-ubuntu'
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
      somap218_avbobe_farbig_rulebased:
      - bodenbedeckung_big.txt
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
      somap310_avbobe_farbig_rulebased:
      - bodenbedeckung_big.txt
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
      somap316_avbobe_farbig_rulebased:
      - bodenbedeckung_big.txt
    template: docker-compose-qgis-3-nginx

```