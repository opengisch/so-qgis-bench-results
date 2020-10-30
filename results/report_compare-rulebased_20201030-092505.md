# QGIS Benchmark summary compare-rulebased (20201030-092505)


compare rulebased rendering on different version of QGIS servers using the same settings

_run completed in 00h 09m 18s_

_Sample size per configuration 5190_
## Summary plot
An interactive summary plot can be found [here](report_compare-rulebased_20201030-092505_plot.html)

## Summary
| name          | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock | Global  |                134.6 | +0.0%                        |         1268.8 | +0.0%                  |           150   | +0.0%                   |           29 |         2376 |          5190 |            0 |     8103.3 |     6946.1 |     4126   |      99.9 |      98.6 |      43.4 |          0 |
| qgis316-stock | Global  |                169.9 | +26.2%                       |         1616.6 | +27.4%                 |           220.5 | +47.0%                  |            4 |         2257 |          5190 |            0 |     7707.6 |     6667   |     4220.1 |      86.9 |      74.4 |      38.2 |          0 |
| qgis310-stock | Global  |                193.1 | +43.5%                       |         1850.4 | +45.8%                 |           257   | +71.3%                  |           32 |         2033 |          5190 |            0 |     7682.6 |     6642.2 |     4207.9 |      90.4 |      74.9 |      33.2 |          0 |

## Aggregated
| name                                             | group                         |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|--------------------------------------------------|-------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock > somap218_avbobe_farbig_rulebased | somap_avbobe_farbig_rulebased |                134.6 | +0.0%                        |         1268.8 | +0.0%                  |           150   | +0.0%                   |           29 |         2376 |          5190 |            0 |     8103.3 |     6946.1 |     4126   |      99.9 |      98.6 |      43.4 |          0 |
| qgis316-stock > somap316_avbobe_farbig_rulebased | somap_avbobe_farbig_rulebased |                169.9 | +26.2%                       |         1616.6 | +27.4%                 |           220.5 | +47.0%                  |            4 |         2257 |          5190 |            0 |     7707.6 |     6667   |     4220.1 |      86.9 |      74.4 |      38.2 |          0 |
| qgis310-stock > somap310_avbobe_farbig_rulebased | somap_avbobe_farbig_rulebased |                193.1 | +43.5%                       |         1850.4 | +45.8%                 |           257   | +71.3%                  |           32 |         2033 |          5190 |            0 |     7682.6 |     6642.2 |     4207.9 |      90.4 |      74.9 |      33.2 |          0 |

## Detail
| name                                                                                                                                                                                                                         | group                                                  |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218-stock > somap218_avbobe_farbig_rulebased > bodenbedeckung_big.txt](../results/details/compare-rulebased/20201030-092505/qgis218-stock/somap218_avbobe_farbig_rulebased/bodenbedeckung_big.txt/dashboard/index.html) | somap_avbobe_farbig_rulebased > bodenbedeckung_big.txt |                134.6 | +0.0%                        |         1268.8 | +0.0%                  |           150   | +0.0%                   |          5190 |            0 |          0 |       244.477 |           29 |         2376 |         570.9 |        675    |        936.45 |      40.4442 |                7728.26 |            18.1585 |     8103.3 |     6946.1 |     4126   |      99.9 |      98.6 |      43.4 |
| [qgis316-stock > somap316_avbobe_farbig_rulebased > bodenbedeckung_big.txt](../results/details/compare-rulebased/20201030-092505/qgis316-stock/somap316_avbobe_farbig_rulebased/bodenbedeckung_big.txt/dashboard/index.html) | somap_avbobe_farbig_rulebased > bodenbedeckung_big.txt |                169.9 | +26.2%                       |         1616.6 | +27.4%                 |           220.5 | +47.0%                  |          5190 |            0 |          0 |       311.48  |            4 |         2257 |         695   |        862.35 |       1291.09 |      31.735  |                6059.12 |            14.2483 |     7707.6 |     6667   |     4220.1 |      86.9 |      74.4 |      38.2 |
| [qgis310-stock > somap310_avbobe_farbig_rulebased > bodenbedeckung_big.txt](../results/details/compare-rulebased/20201030-092505/qgis310-stock/somap310_avbobe_farbig_rulebased/bodenbedeckung_big.txt/dashboard/index.html) | somap_avbobe_farbig_rulebased > bodenbedeckung_big.txt |                193.1 | +43.5%                       |         1850.4 | +45.8%                 |           257   | +71.3%                  |          5190 |            0 |          0 |       356.536 |           32 |         2033 |         760   |        962    |       1406.36 |      27.7857 |                5305.12 |            12.4751 |     7682.6 |     6642.2 |     4207.9 |      90.4 |      74.9 |      33.2 |

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