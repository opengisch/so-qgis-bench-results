# QGIS Benchmark summary compare-fg-oeko (20220426-104151)


compare different version of QGIS servers using the same settings and a working map request

_run completed in 00h 22m 33s_

_Sample size per configuration 1_
## Summary plot
An interactive summary plot can be found [here](report_compare-fg-oeko_20220426-104151_plot.html)

## Summary
| name    | group   |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------|---------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316 | Global  |              4.8 | +0.0%                    |             183.8 | +49.9%                    |            0.4 | +17.8%                 |             351 | +17.8%                  |          351 |          351 |              0.2 |             1 |            0 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |          0 |
| qgis322 | Global  |              4.8 | +0.0%                    |             281.8 | +129.9%                   |            0.3 | +0.0%                  |             298 | +0.0%                   |          298 |          298 |              0.2 |             1 |            0 |     8379.9 |     8379.9 |     8379.9 |       2.7 |       2.7 |       2.7 |          0 |
| qgis310 | Global  |              4.9 | +2.1%                    |             311.5 | +154.1%                   |            1.1 | +254.0%                |            1055 | +254.0%                 |         1055 |         1055 |              0.2 |             1 |            0 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |          0 |
| qgis314 | Global  |              5.5 | +14.6%                   |             350.4 | +185.8%                   |            1.5 | +393.0%                |            1469 | +393.0%                 |         1469 |         1469 |              0.2 |             1 |            0 |     8298.5 |     8298.5 |     8298.5 |       2.8 |       2.8 |       2.8 |          0 |
| qgis218 | Global  |              7.5 | +56.2%                   |             122.6 | +0.0%                     |            3.5 | +1087.9%               |            3540 | +1087.9%                |         3540 |         3540 |              0.2 |             1 |            0 |     7161.1 |     7160.8 |     7160.3 |       6.4 |       4.2 |       0.1 |          0 |

## Aggregated
| name                   | group     |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------|-----------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316 > somap316_fix | somap_fix |              4.8 | +0.0%                    |             183.8 | +49.9%                    |            0.4 | +17.8%                 |             351 | +17.8%                  |          351 |          351 |              0.2 |             1 |            0 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |          0 |
| qgis322 > somap318_fix | somap_fix |              4.8 | +0.0%                    |             281.8 | +129.9%                   |            0.3 | +0.0%                  |             298 | +0.0%                   |          298 |          298 |              0.2 |             1 |            0 |     8379.9 |     8379.9 |     8379.9 |       2.7 |       2.7 |       2.7 |          0 |
| qgis310 > somap310_fix | somap_fix |              4.9 | +2.1%                    |             311.5 | +154.1%                   |            1.1 | +254.0%                |            1055 | +254.0%                 |         1055 |         1055 |              0.2 |             1 |            0 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |          0 |
| qgis314 > somap314_fix | somap_fix |              5.5 | +14.6%                   |             350.4 | +185.8%                   |            1.5 | +393.0%                |            1469 | +393.0%                 |         1469 |         1469 |              0.2 |             1 |            0 |     8298.5 |     8298.5 |     8298.5 |       2.8 |       2.8 |       2.8 |          0 |
| qgis218 > somap218_fix | somap_fix |              7.5 | +56.2%                   |             122.6 | +0.0%                     |            3.5 | +1087.9%               |            3540 | +1087.9%                |         3540 |         3540 |              0.2 |             1 |            0 |     7161.1 |     7160.8 |     7160.3 |       6.4 |       4.2 |       0.1 |          0 |

## Detail
| name                                                                                                                                             | group                   |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|--------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis316 > somap316_fix > fg_oeko.txt](../results/details/compare-fg-oeko/20220426-104151/qgis316/somap316_fix/fg_oeko.txt/dashboard/index.html) | somap_fix > fg_oeko.txt |              4.8 | +0.0%                    |             183.8 | +49.9%                    |            0.4 | +17.8%                 |             351 | +17.8%                  |             1 |            0 |          0 |           351 |          351 |          351 |           351 |           351 |           351 |     2.849    |               488.103  |           1.08229  |              0.2 |      nan   |      nan   |      nan   |     nan   |     nan   |     nan   |
| [qgis322 > somap318_fix > fg_oeko.txt](../results/details/compare-fg-oeko/20220426-104151/qgis322/somap318_fix/fg_oeko.txt/dashboard/index.html) | somap_fix > fg_oeko.txt |              4.8 | +0.0%                    |             281.8 | +129.9%                   |            0.3 | +0.0%                  |             298 | +0.0%                   |             1 |            0 |          0 |           298 |          298 |          298 |           298 |           298 |           298 |     3.3557   |               574.923  |           1.27477  |              0.2 |     8379.9 |     8379.9 |     8379.9 |       2.7 |       2.7 |       2.7 |
| [qgis310 > somap310_fix > fg_oeko.txt](../results/details/compare-fg-oeko/20220426-104151/qgis310/somap310_fix/fg_oeko.txt/dashboard/index.html) | somap_fix > fg_oeko.txt |              4.9 | +2.1%                    |             311.5 | +154.1%                   |            1.1 | +254.0%                |            1055 | +254.0%                 |             1 |            0 |          0 |          1055 |         1055 |         1055 |          1055 |          1055 |          1055 |     0.947867 |               167.15   |           0.360078 |              0.2 |      nan   |      nan   |      nan   |     nan   |     nan   |     nan   |
| [qgis314 > somap314_fix > fg_oeko.txt](../results/details/compare-fg-oeko/20220426-104151/qgis314/somap314_fix/fg_oeko.txt/dashboard/index.html) | somap_fix > fg_oeko.txt |              5.5 | +14.6%                   |             350.4 | +185.8%                   |            1.5 | +393.0%                |            1469 | +393.0%                 |             1 |            0 |          0 |          1469 |         1469 |         1469 |          1469 |          1469 |          1469 |     0.680735 |               116.622  |           0.2586   |              0.2 |     8298.5 |     8298.5 |     8298.5 |       2.8 |       2.8 |       2.8 |
| [qgis218 > somap218_fix > fg_oeko.txt](../results/details/compare-fg-oeko/20220426-104151/qgis218/somap218_fix/fg_oeko.txt/dashboard/index.html) | somap_fix > fg_oeko.txt |              7.5 | +56.2%                   |             122.6 | +0.0%                     |            3.5 | +1087.9%               |            3540 | +1087.9%                |             1 |            0 |          0 |          3540 |         3540 |         3540 |          3540 |          3540 |          3540 |     0.282486 |                45.3089 |           0.107312 |              0.2 |     7161.1 |     7160.8 |     7160.3 |       6.4 |       4.2 |       0.1 |

### used global configuration

```
cpu-cores: 4
deploy-method: docker-swarm
logs-dir: /home/mkuhn/so-qgis-bench/logs/prepared
parallel-requests: 10
reports-dir: ./reports/
result-dir: /home/mkuhn/so-qgis-bench/results

```
### test configurations

```
description: 'compare different version of QGIS servers using the same settings and a working map request'
test-cases:
  base:
    active: no
    compose-variables:
      QGIS_REPLICAS: '6'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_SERVER_MAX_THREADS: '1' #QGIS3
      QGIS_FCGI_PROCESSES: '1' #QGIS2
      PG_SERVICE: 'pg_service.conf'

  qgis218:
    active: yes
    inherit: base
    template: docker-compose-qgis-2
    path-prefix: 'ows'
    projects:
      somap218_fix:
        - fg_oeko.txt

  qgis310:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10-ubuntu'
    projects:
      somap310_fix:
        - fg_oeko.txt

  qgis314:
    active: yes
    inherit: qgis310
    compose-variables:
      QGIS_VERSION: '3.14-ubuntu'
    projects:
      somap314_fix:
        - fg_oeko.txt

  qgis316:
    active: yes
    inherit: qgis310
    compose-variables:
      QGIS_VERSION: '3.16'
    projects:
      somap316_fix:
        - fg_oeko.txt

  qgis322:
    active: yes
    inherit: qgis310
    compose-variables:
      QGIS_VERSION: '3.22'
    projects:
      somap318_fix:
        - fg_oeko.txt
```
### parsed test configurations

```
description: compare different version of QGIS servers using the same settings and
  a working map request
test-cases:
  base:
    active: false
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
  qgis218:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
    inherit: base
    path-prefix: ows
    projects:
      somap218_fix:
      - fg_oeko.txt
    template: docker-compose-qgis-2
  qgis310:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: 3.10-ubuntu
    inherit: base
    path-prefix: ogc
    projects:
      somap310_fix:
      - fg_oeko.txt
    template: docker-compose-qgis-3-nginx
  qgis314:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: 3.14-ubuntu
    inherit: qgis310
    path-prefix: ogc
    projects:
      somap314_fix:
      - fg_oeko.txt
    template: docker-compose-qgis-3-nginx
  qgis316:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.16'
    inherit: qgis310
    path-prefix: ogc
    projects:
      somap316_fix:
      - fg_oeko.txt
    template: docker-compose-qgis-3-nginx
  qgis322:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.22'
    inherit: qgis310
    path-prefix: ogc
    projects:
      somap318_fix:
      - fg_oeko.txt
    template: docker-compose-qgis-3-nginx

```