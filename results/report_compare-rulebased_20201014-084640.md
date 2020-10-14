# QGIS Benchmark summary compare-rulebased (20201014-084640)


compare rulebased rendering on different version of QGIS servers using the same settings

_run completed in 00h 08m 20s_
## Summary plot
An interactive summary plot can be found [here](report_compare-rulebased_20201014-084640_plot.html)

## Summary
| name          | group   |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------|---------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock | Global  |       1221.7 |               0   |          5190 |            0 |     7079.7 |     5642.5 |     2678.2 |      99.9 |      98.4 |      14.2 |          0 |
| qgis310-stock | Global  |       1769.4 |              44.8 |          5190 |            0 |     6702   |     5382.6 |     2744.4 |      98.2 |      74.8 |      14.7 |          0 |
| qgis314-stock | Global  |       1789.2 |              46.5 |          5190 |            0 |     6687.5 |     5397.7 |     2860.3 |      92.3 |      74.8 |      15.6 |          0 |

## Aggregated
| name                                             | group                         |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|--------------------------------------------------|-------------------------------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock > somap218_avbobe_farbig_rulebased | somap_avbobe_farbig_rulebased |       1221.7 |               0   |          5190 |            0 |     7079.7 |     5642.5 |     2678.2 |      99.9 |      98.4 |      14.2 |          0 |
| qgis310-stock > somap310_avbobe_farbig_rulebased | somap_avbobe_farbig_rulebased |       1769.4 |              44.8 |          5190 |            0 |     6702   |     5382.6 |     2744.4 |      98.2 |      74.8 |      14.7 |          0 |
| qgis314-stock > somap314_avbobe_farbig_rulebased | somap_avbobe_farbig_rulebased |       1789.2 |              46.5 |          5190 |            0 |     6687.5 |     5397.7 |     2860.3 |      92.3 |      74.8 |      15.6 |          0 |

## Detail
| name                                                                                                                                                                                                                         | group                                                  |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218-stock > somap218_avbobe_farbig_rulebased > bodenbedeckung_big.txt](../results/details/compare-rulebased/20201014-084640/qgis218-stock/somap218_avbobe_farbig_rulebased/bodenbedeckung_big.txt/dashboard/index.html) | somap_avbobe_farbig_rulebased > bodenbedeckung_big.txt |       1221.7 |               0   |          5190 |            0 |          0 |       235.4   |             143 |           28 |         1917 |         561   |        659    |        902    |      42.0165 |                8028.7  |            18.8644 |     7079.7 |     5642.5 |     2678.2 |      99.9 |      98.4 |      14.2 |
| [qgis310-stock > somap310_avbobe_farbig_rulebased > bodenbedeckung_big.txt](../results/details/compare-rulebased/20201014-084640/qgis310-stock/somap310_avbobe_farbig_rulebased/bodenbedeckung_big.txt/dashboard/index.html) | somap_avbobe_farbig_rulebased > bodenbedeckung_big.txt |       1769.4 |              44.8 |          5190 |            0 |          0 |       340.919 |             258 |           27 |         1878 |         709.9 |        893    |       1220.54 |      29.1105 |                5558.05 |            13.07   |     6702   |     5382.6 |     2744.4 |      98.2 |      74.8 |      14.7 |
| [qgis314-stock > somap314_avbobe_farbig_rulebased > bodenbedeckung_big.txt](../results/details/compare-rulebased/20201014-084640/qgis314-stock/somap314_avbobe_farbig_rulebased/bodenbedeckung_big.txt/dashboard/index.html) | somap_avbobe_farbig_rulebased > bodenbedeckung_big.txt |       1789.2 |              46.5 |          5190 |            0 |          0 |       344.745 |             254 |           30 |         1986 |         735.9 |        901.45 |       1246.36 |      28.7901 |                5496.71 |            12.9261 |     6687.5 |     5397.7 |     2860.3 |      92.3 |      74.8 |      15.6 |

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

  qgis314-stock:
    active: yes
    inherit: qgis310-stock
    compose-variables:
      QGIS_VERSION: '3.14'
    projects:
      somap314_avbobe_farbig_rulebased:
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
      somap314_avbobe_farbig_rulebased:
      - bodenbedeckung_big.txt
    template: docker-compose-qgis-3-nginx

```