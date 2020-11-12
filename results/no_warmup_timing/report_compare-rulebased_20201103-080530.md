# QGIS Benchmark summary compare-rulebased (20201103-080530)


compare rulebased rendering on different version of QGIS servers using the same settings

_run completed in 00h 09m 32s_

_Sample size per configuration 5190_
## Summary plot
An interactive summary plot can be found [here](report_compare-rulebased_20201103-080530_plot.html)

## Summary
| name          | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock | Global  |                137.3 | +0.0%                        |         1295.8 | +0.0%                  |             152 | +0.0%                   |           28 |         2111 |            968.5 |          5190 |            0 |     6674.4 |     5353.9 |     2603   |      99.6 |      98.4 |      14.4 |          0 |
| qgis316-stock | Global  |                169.9 | +23.7%                       |         1617.1 | +24.8%                 |             229 | +50.7%                  |            4 |         1885 |            967.7 |          5190 |            0 |     6326.8 |     5150   |     2755.4 |      95.3 |      74.8 |      17.4 |          0 |
| qgis310-stock | Global  |                196.2 | +42.9%                       |         1879.9 | +45.1%                 |             280 | +84.2%                  |           32 |         1926 |            967.7 |          5190 |            0 |     6298.9 |     5130.6 |     2718   |      93.5 |      74.2 |      16.8 |          0 |

## Aggregated
| name                                             | group                         |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|--------------------------------------------------|-------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock > somap218_avbobe_farbig_rulebased | somap_avbobe_farbig_rulebased |                137.3 | +0.0%                        |         1295.8 | +0.0%                  |             152 | +0.0%                   |           28 |         2111 |            968.5 |          5190 |            0 |     6674.4 |     5353.9 |     2603   |      99.6 |      98.4 |      14.4 |          0 |
| qgis316-stock > somap316_avbobe_farbig_rulebased | somap_avbobe_farbig_rulebased |                169.9 | +23.7%                       |         1617.1 | +24.8%                 |             229 | +50.7%                  |            4 |         1885 |            967.7 |          5190 |            0 |     6326.8 |     5150   |     2755.4 |      95.3 |      74.8 |      17.4 |          0 |
| qgis310-stock > somap310_avbobe_farbig_rulebased | somap_avbobe_farbig_rulebased |                196.2 | +42.9%                       |         1879.9 | +45.1%                 |             280 | +84.2%                  |           32 |         1926 |            967.7 |          5190 |            0 |     6298.9 |     5130.6 |     2718   |      93.5 |      74.2 |      16.8 |          0 |

## Detail
| name                                                                                                                                                                                                                         | group                                                  |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218-stock > somap218_avbobe_farbig_rulebased > bodenbedeckung_big.txt](../results/details/compare-rulebased/20201103-080530/qgis218-stock/somap218_avbobe_farbig_rulebased/bodenbedeckung_big.txt/dashboard/index.html) | somap_avbobe_farbig_rulebased > bodenbedeckung_big.txt |                137.3 | +0.0%                        |         1295.8 | +0.0%                  |             152 | +0.0%                   |          5190 |            0 |          0 |       249.664 |           28 |         2111 |           592 |        699.45 |        966.81 |      39.6341 |                7573.46 |            17.7948 |            968.5 |     6674.4 |     5353.9 |     2603   |      99.6 |      98.4 |      14.4 |
| [qgis316-stock > somap316_avbobe_farbig_rulebased > bodenbedeckung_big.txt](../results/details/compare-rulebased/20201103-080530/qgis316-stock/somap316_avbobe_farbig_rulebased/bodenbedeckung_big.txt/dashboard/index.html) | somap_avbobe_farbig_rulebased > bodenbedeckung_big.txt |                169.9 | +23.7%                       |         1617.1 | +24.8%                 |             229 | +50.7%                  |          5190 |            0 |          0 |       311.589 |            4 |         1885 |           688 |        845.45 |       1220.54 |      31.7625 |                6064.39 |            14.2607 |            967.7 |     6326.8 |     5150   |     2755.4 |      95.3 |      74.8 |      17.4 |
| [qgis310-stock > somap310_avbobe_farbig_rulebased > bodenbedeckung_big.txt](../results/details/compare-rulebased/20201103-080530/qgis310-stock/somap310_avbobe_farbig_rulebased/bodenbedeckung_big.txt/dashboard/index.html) | somap_avbobe_farbig_rulebased > bodenbedeckung_big.txt |                196.2 | +42.9%                       |         1879.9 | +45.1%                 |             280 | +84.2%                  |          5190 |            0 |          0 |       362.225 |           32 |         1926 |           741 |        890    |       1240.81 |      27.3649 |                5224.79 |            12.2862 |            967.7 |     6298.9 |     5130.6 |     2718   |      93.5 |      74.2 |      16.8 |

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
      QGIS_REPLICAS: '6'
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