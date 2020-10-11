# QGIS Benchmark summary compare-rulebased (20201011-051753)


compare rulebased rendering on different version of QGIS servers using the same settings

_run completed in 496.05s_

## Summary
| name          | group   |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   cpuMax% |   cpuAvg% |   errorPct |
|---------------|---------|--------------|-------------------|---------------|--------------|------------|------------|-----------|-----------|------------|
| qgis218-stock | Global  |      1208.44 |              0    |          5190 |            0 |     7001.4 |     5368   |      99.9 |      98.1 |          0 |
| qgis310-stock | Global  |      1754.17 |             45.16 |          5190 |            0 |     6676   |     5144.3 |      90.3 |      74.9 |          0 |
| qgis314-stock | Global  |      1772.77 |             46.7  |          5190 |            0 |     6711.2 |     5144.7 |      98.9 |      74.4 |          0 |

## Aggregated
| name                                             | group                         |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   cpuMax% |   cpuAvg% |   errorPct |
|--------------------------------------------------|-------------------------------|--------------|-------------------|---------------|--------------|------------|------------|-----------|-----------|------------|
| qgis218-stock > somap218_avbobe_farbig_rulebased | somap_avbobe_farbig_rulebased |      1208.44 |              0    |          5190 |            0 |     7001.4 |     5368   |      99.9 |      98.1 |          0 |
| qgis310-stock > somap310_avbobe_farbig_rulebased | somap_avbobe_farbig_rulebased |      1754.17 |             45.16 |          5190 |            0 |     6676   |     5144.3 |      90.3 |      74.9 |          0 |
| qgis314-stock > somap314_avbobe_farbig_rulebased | somap_avbobe_farbig_rulebased |      1772.77 |             46.7  |          5190 |            0 |     6711.2 |     5144.7 |      98.9 |      74.4 |          0 |

## Detail
| name                                                                                                                                                                                                                         | group                                                  |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218-stock > somap218_avbobe_farbig_rulebased > bodenbedeckung_big.txt](../results/details/compare-rulebased/20201011-051753/qgis218-stock/somap218_avbobe_farbig_rulebased/bodenbedeckung_big.txt/dashboard/index.html) | somap_avbobe_farbig_rulebased > bodenbedeckung_big.txt |      1208.44 |              0    |          5190 |            0 |          0 |       232.84  |             144 |           28 |         2193 |         548   |        645    |        864    |      42.4901 |                8119.21 |            19.0771 |     7001.4 |     5368   |     2217.2 |      99.9 |      98.1 |      13   |
| [qgis310-stock > somap310_avbobe_farbig_rulebased > bodenbedeckung_big.txt](../results/details/compare-rulebased/20201011-051753/qgis310-stock/somap310_avbobe_farbig_rulebased/bodenbedeckung_big.txt/dashboard/index.html) | somap_avbobe_farbig_rulebased > bodenbedeckung_big.txt |      1754.17 |             45.16 |          5190 |            0 |          0 |       337.991 |             265 |           28 |         1779 |         684.9 |        832.35 |       1117    |      29.321  |                5598.25 |            13.1645 |     6676   |     5144.3 |     2418.5 |      90.3 |      74.9 |      14.8 |
| [qgis314-stock > somap314_avbobe_farbig_rulebased > bodenbedeckung_big.txt](../results/details/compare-rulebased/20201011-051753/qgis314-stock/somap314_avbobe_farbig_rulebased/bodenbedeckung_big.txt/dashboard/index.html) | somap_avbobe_farbig_rulebased > bodenbedeckung_big.txt |      1772.77 |             46.7  |          5190 |            0 |          0 |       341.575 |             267 |           26 |         1991 |         694   |        847    |       1150.45 |      29.0166 |                5539.95 |            13.0278 |     6711.2 |     5144.7 |     2370.8 |      98.9 |      74.4 |      15.2 |

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