# QGIS Benchmark summary compare-categorized (20201027-234624)


compare categorised rendering on different version of QGIS servers using the same settings

_run completed in 00h 15m 18s_
## Summary plot
An interactive summary plot can be found [here](report_compare-categorized_20201027-234624_plot.html)

## Summary
| name          | group   |   duration s |   medianResTime |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------|---------|--------------|-----------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock | Global  |       2276.8 |           233.5 |               0   |          5190 |            0 |     6605.4 |     5752.6 |     2423   |      99.4 |      95   |      12.7 |          0 |
| qgis310-stock | Global  |       3312.3 |           355   |              45.5 |          5190 |            0 |     5706.1 |     5070.2 |     2553.3 |      92.9 |      73.5 |      14.6 |          0 |
| qgis314-stock | Global  |       3331.6 |           355   |              46.3 |          5190 |            0 |     5759.2 |     5072.1 |     2574.4 |      91.1 |      73.6 |      15.2 |          0 |

## Aggregated
| name                                               | group                           |   duration s |   medianResTime |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|----------------------------------------------------|---------------------------------|--------------|-----------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock > somap218_avbobe_farbig_categorized | somap_avbobe_farbig_categorized |       2276.8 |           233.5 |               0   |          5190 |            0 |     6605.4 |     5752.6 |     2423   |      99.4 |      95   |      12.7 |          0 |
| qgis310-stock > somap310_avbobe_farbig_categorized | somap_avbobe_farbig_categorized |       3312.3 |           355   |              45.5 |          5190 |            0 |     5706.1 |     5070.2 |     2553.3 |      92.9 |      73.5 |      14.6 |          0 |
| qgis314-stock > somap314_avbobe_farbig_categorized | somap_avbobe_farbig_categorized |       3331.6 |           355   |              46.3 |          5190 |            0 |     5759.2 |     5072.1 |     2574.4 |      91.1 |      73.6 |      15.2 |          0 |

## Detail
| name                                                                                                                                                                                                                               | group                                                    |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218-stock > somap218_avbobe_farbig_categorized > bodenbedeckung_big.txt](../results/details/compare-categorized/20201027-234624/qgis218-stock/somap218_avbobe_farbig_categorized/bodenbedeckung_big.txt/dashboard/index.html) | somap_avbobe_farbig_categorized > bodenbedeckung_big.txt |       2276.8 |               0   |          5190 |            0 |          0 |       438.699 |           233.5 |           19 |        13221 |         674   |        1020.8 |       4913.94 |      22.4298 |                5814.62 |           10.1143  |     6605.4 |     5752.6 |     2423   |      99.4 |      95   |      12.7 |
| [qgis310-stock > somap310_avbobe_farbig_categorized > bodenbedeckung_big.txt](../results/details/compare-categorized/20201027-234624/qgis310-stock/somap310_avbobe_farbig_categorized/bodenbedeckung_big.txt/dashboard/index.html) | somap_avbobe_farbig_categorized > bodenbedeckung_big.txt |       3312.3 |              45.5 |          5190 |            0 |          0 |       638.208 |           355   |           20 |        20860 |        1090   |        1777.9 |       8102.54 |      15.567  |                4155.1  |            7.01965 |     5706.1 |     5070.2 |     2553.3 |      92.9 |      73.5 |      14.6 |
| [qgis314-stock > somap314_avbobe_farbig_categorized > bodenbedeckung_big.txt](../results/details/compare-categorized/20201027-234624/qgis314-stock/somap314_avbobe_farbig_categorized/bodenbedeckung_big.txt/dashboard/index.html) | somap_avbobe_farbig_categorized > bodenbedeckung_big.txt |       3331.6 |              46.3 |          5190 |            0 |          0 |       641.928 |           355   |           19 |        21127 |        1104.7 |        1756.2 |       8028.63 |      15.4889 |                4134.14 |            6.98441 |     5759.2 |     5072.1 |     2574.4 |      91.1 |      73.6 |      15.2 |

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
description: 'compare categorised rendering on different version of QGIS servers using the same settings'

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
      somap218_avbobe_farbig_categorized:
        - bodenbedeckung_big.txt

  qgis310-stock:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
    projects:
      somap310_avbobe_farbig_categorized:
        - bodenbedeckung_big.txt

  qgis314-stock:
    active: yes
    inherit: qgis310-stock
    compose-variables:
      QGIS_VERSION: '3.14'
    projects:
      somap314_avbobe_farbig_categorized:
        - bodenbedeckung_big.txt

```
### parsed test configurations

```
description: compare categorised rendering on different version of QGIS servers using
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
      somap218_avbobe_farbig_categorized:
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
      somap310_avbobe_farbig_categorized:
      - bodenbedeckung_big.txt
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
      somap314_avbobe_farbig_categorized:
      - bodenbedeckung_big.txt
    template: docker-compose-qgis-3-nginx

```