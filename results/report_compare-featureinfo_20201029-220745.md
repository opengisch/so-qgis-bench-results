# QGIS Benchmark summary compare-featureinfo (20201029-220745)


compare different version of QGIS servers using the same settings

_run completed in 00h 02m 03s_

_Sample size per configuration 198_
## Summary plot
An interactive summary plot can be found [here](report_compare-featureinfo_20201029-220745_plot.html)

## Summary
| name               | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|--------------------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316            | Global  |                  8.3 | +0.0%                        |           23.2 | +4.9%                  |             119 | +80.3%                  |           37 |          169 |           198 |            0 |     3781   |     3779.9 |     3778.8 |      34.9 |      29   |      23   |          0 |
| qgis316-standalone | Global  |                  8.3 | +0.0%                        |           22.2 | +0.0%                  |             111 | +68.2%                  |           33 |          219 |           198 |            0 |     3777.7 |     3770.4 |     3757.1 |      36.2 |      29.4 |      21.4 |          0 |
| qgis218            | Global  |                  9.9 | +19.3%                       |           31.9 | +43.9%                 |              66 | +0.0%                   |           21 |         3058 |           198 |            0 |     3964.1 |     3865.7 |     3751   |      91.1 |      59   |      25.8 |          0 |
| qgis310            | Global  |                 15.5 | +86.7%                       |           91.8 | +314.6%                |             466 | +606.1%                 |          187 |          573 |           198 |            0 |     3771.6 |     3756.7 |     3715   |      35   |      18.5 |      13.7 |          0 |

## Aggregated
| name                             | group    |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|----------------------------------|----------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316 > somap316_lk            | somap_lk |                  8.3 | +0.0%                        |           23.2 | +4.9%                  |             119 | +80.3%                  |           37 |          169 |           198 |            0 |     3781   |     3779.9 |     3778.8 |      34.9 |      29   |      23   |          0 |
| qgis316-standalone > somap316_lk | somap_lk |                  8.3 | +0.0%                        |           22.2 | +0.0%                  |             111 | +68.2%                  |           33 |          219 |           198 |            0 |     3777.7 |     3770.4 |     3757.1 |      36.2 |      29.4 |      21.4 |          0 |
| qgis218 > somap218_lk            | somap_lk |                  9.9 | +19.3%                       |           31.9 | +43.9%                 |              66 | +0.0%                   |           21 |         3058 |           198 |            0 |     3964.1 |     3865.7 |     3751   |      91.1 |      59   |      25.8 |          0 |
| qgis310 > somap310_lk            | somap_lk |                 15.5 | +86.7%                       |           91.8 | +314.6%                |             466 | +606.1%                 |          187 |          573 |           198 |            0 |     3771.6 |     3756.7 |     3715   |      35   |      18.5 |      13.7 |          0 |

## Detail
| name                                                                                                                                                                                   | group                         |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis316 > somap316_lk > featureinfo_lk.txt](../results/details/compare-featureinfo/20201029-220745/qgis316/somap316_lk/featureinfo_lk.txt/dashboard/index.html)                       | somap_lk > featureinfo_lk.txt |                  8.3 | +0.0%                        |           23.2 | +4.9%                  |             119 | +80.3%                  |           198 |            0 |          0 |       117.369 |           37 |          169 |         152.1 |        157.05 |        165.04 |      72.4214 |                66.9749 |           34.0525  |     3781   |     3779.9 |     3778.8 |      34.9 |      29   |      23   |
| [qgis316-standalone > somap316_lk > featureinfo_lk.txt](../results/details/compare-featureinfo/20201029-220745/qgis316-standalone/somap316_lk/featureinfo_lk.txt/dashboard/index.html) | somap_lk > featureinfo_lk.txt |                  8.3 | +0.0%                        |           22.2 | +0.0%                  |             111 | +68.2%                  |           198 |            0 |          0 |       111.894 |           33 |          219 |         146   |        155.1  |        210.09 |      75.804  |                62.4043 |           36.6794  |     3777.7 |     3770.4 |     3757.1 |      36.2 |      29.4 |      21.4 |
| [qgis218 > somap218_lk > featureinfo_lk.txt](../results/details/compare-featureinfo/20201029-220745/qgis218/somap218_lk/featureinfo_lk.txt/dashboard/index.html)                       | somap_lk > featureinfo_lk.txt |                  9.9 | +19.3%                       |           31.9 | +43.9%                 |              66 | +0.0%                   |           198 |            0 |          0 |       161.04  |           21 |         3058 |         166.4 |       1118.4  |       2096.71 |      45.5277 |                49.7146 |           21.4071  |     3964.1 |     3865.7 |     3751   |      91.1 |      59   |      25.8 |
| [qgis310 > somap310_lk > featureinfo_lk.txt](../results/details/compare-featureinfo/20201029-220745/qgis310/somap310_lk/featureinfo_lk.txt/dashboard/index.html)                       | somap_lk > featureinfo_lk.txt |                 15.5 | +86.7%                       |           91.8 | +314.6%                |             466 | +606.1%                 |           198 |            0 |          0 |       463.859 |          187 |          573 |         545.1 |        556.05 |        566.07 |      20.2537 |                18.7701 |            9.52328 |     3771.6 |     3756.7 |     3715   |      35   |      18.5 |      13.7 |

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
description: 'compare different version of QGIS servers using the same settings'
test-cases:
  base:
    active: no
    compose-variables:
      QGIS_REPLICAS: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_SERVER_CACHE_SIZE: '50'
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
      somap218_lk:
        - featureinfo_lk.txt
#      somap218_grundplanav_farbig:
#        - featureinfo_av.txt

  qgis310:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
    projects:
      somap310_lk:
        - featureinfo_lk.txt
#      somap310_grundplanav_farbig:
#        - featureinfo_av.txt

  qgis316:
    active: yes
    inherit: qgis310
    compose-variables:
      QGIS_VERSION: '3.16'
    projects:
      somap316_lk:
        - featureinfo_lk.txt
#      somap316_grundplanav_farbig:
#        - featureinfo_av.txt

  qgis316-standalone:
    active: yes
    inherit: qgis316
    template: docker-compose-qgis-3-standalone
    path-prefix: ''
    use-map-param-path: '/io/data'

```
### parsed test configurations

```
description: compare different version of QGIS servers using the same settings
test-cases:
  base:
    active: false
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
  qgis218:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
    inherit: base
    path-prefix: ows
    projects:
      somap218_lk:
      - featureinfo_lk.txt
    template: docker-compose-qgis-2
  qgis310:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: base
    path-prefix: ogc
    projects:
      somap310_lk:
      - featureinfo_lk.txt
    template: docker-compose-qgis-3-nginx
  qgis316:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.16'
    inherit: qgis310
    path-prefix: ogc
    projects:
      somap316_lk:
      - featureinfo_lk.txt
    template: docker-compose-qgis-3-nginx
  qgis316-standalone:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.16'
    inherit: qgis316
    path-prefix: ''
    projects:
      somap316_lk:
      - featureinfo_lk.txt
    template: docker-compose-qgis-3-standalone
    use-map-param-path: /io/data

```