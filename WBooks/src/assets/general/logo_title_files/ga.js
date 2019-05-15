(function() {
  var Clearbit, providePlugin,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  providePlugin = function(pluginName, pluginConstructor) {
    var tryApply = function() {
      var ga = window[window['GoogleAnalyticsObject'] || 'ga'];

      if (typeof ga === 'function') {
        ga('provide', pluginName, pluginConstructor);
        return true;
      } else {
        return false;
      }
    }

    if (tryApply()) {
      // Native support
    } else if (window.analytics && typeof window.analytics.ready === 'function') {
      // Segment support
      analytics.ready(tryApply);
    } else {
      console.error("Clearbit error: 'ga' variable not found.");
    }
  };

  Clearbit = (function() {
      function Clearbit(tracker, config) {
        this.tracker = tracker;
        this.config = config != null ? config : {};
        this.triggerEvent = bind(this.triggerEvent, this);
        this.setIPDimensions = bind(this.setIPDimensions, this);
        this.setDimensions = bind(this.setDimensions, this);
        this.set = bind(this.set, this);
        this.done = bind(this.done, this);
        this.mapping = this.config.mapping || {};
        this.done({"ip":"190.210.239.17","domain":"wolox.com.ar","type":"company","fuzzy":true,"company":{"id":"0de3e9ce-1401-4a79-acdd-81e85c5f1baf","name":"Wolox","legalName":null,"domain":"wolox.com.ar","domainAliases":["wolox.mx","wolox.io","wolox.cl","wolox.co"],"site":{"phoneNumbers":["+54 11 6091-2166","+1 786-491-6256","+1 917-257-4551"],"emailAddresses":["hello@wolox.co"]},"category":{"sector":"Industrials","industryGroup":"Commercial \u0026 Professional Services","industry":"Professional Services","subIndustry":"Consulting","sicCode":"73","naicsCode":"54"},"tags":["Consulting \u0026 Professional Services","B2B","SAAS","Enterprise"],"description":"  Wolox is a software company that specializes in providing technological solutions to start-ups; entrepreneurs and companies that are seeking to innovate and need support in developing their ideas.     Using the product building method, our tech teams...","foundedYear":2011,"location":"Güemes 4673, Buenos Aires, Argentina","timeZone":"America/Argentina/Buenos_Aires","utcOffset":-3,"geo":{"streetNumber":"4673","streetName":"Güemes","subPremise":null,"city":null,"postalCode":null,"state":"Buenos Aires","stateCode":null,"country":"Argentina","countryCode":"AR","lat":-34.5808862,"lng":-58.4241335},"logo":"https://logo.clearbit.com/wolox.com.ar","facebook":{"handle":"woloxsoftware","likes":17185},"linkedin":{"handle":null},"twitter":{"handle":"wolox","id":"202739320","bio":"We are a team of tech gurus and creative innovators that transform your ideas into products","followers":1657,"following":440,"location":"Buenos Aires","site":"https://t.co/GPNIteLiGJ","avatar":"https://pbs.twimg.com/profile_images/879408429751824384/1I5KApVU_normal.jpg"},"crunchbase":{"handle":"organization/wolox"},"emailProvider":false,"type":"private","ticker":null,"identifiers":{"usEIN":null},"phone":"+54 11 6091-2166","metrics":{"alexaUsRank":null,"alexaGlobalRank":2233151,"employees":null,"employeesRange":null,"marketCap":null,"raised":null,"annualRevenue":null,"estimatedAnnualRevenue":null,"fiscalYearEnd":null},"indexedAt":"2019-05-01T15:49:55.801Z","tech":["google_apps","aws_route_53","mandrill","google_tag_manager","linked_in_advertiser","mailgun","google_analytics","go_squared"],"parent":{"domain":null},"ultimate_parent":{"domain":null}},"geoIP":{"city":"Olivos","state":"Buenos Aires","stateCode":"B","country":"Argentina","countryCode":"AR"}});
      }
      Clearbit.prototype.done = function(response) {
          if (response) {
             this.setIPDimensions(response);
             if (response.company){
                 this.setDimensions(response.company);
            }
            return this.triggerEvent();
         }
       };
        Clearbit.prototype.set = function(key, value) {
         if (key && value) {
           return this.tracker.set(key, value);
         }
       };
        Clearbit.prototype.setIPDimensions = function(response) {
         if (typeof response.type !== 'undefined') {
           this.set(this.mapping.type, response.type)
         }
       }

    Clearbit.prototype.setDimensions = function(company) {
      var ref, ref1;
      this.set(this.mapping.companyName, company.name);
      this.set(this.mapping.companyDomain, company.domain);
      this.set(this.mapping.companyType, company.type);
      this.set(this.mapping.companyTags, (ref = company.tags) != null ? ref.join(',') : void 0);
      this.set(this.mapping.companyTech, (ref1 = company.tech) != null ? ref1.join(',') : void 0);
      this.set(this.mapping.companySector, company.category.sector);
      this.set(this.mapping.companyIndustryGroup, company.category.industryGroup);
      this.set(this.mapping.companyIndustry, company.category.industry);
      this.set(this.mapping.companySubIndustry, company.category.subIndustry);
      this.set(this.mapping.companySicCode, company.category.sicCode);
      this.set(this.mapping.companyNaicsCode, company.category.naicsCode);
      this.set(this.mapping.companyCountry, company.geo.countryCode);
      this.set(this.mapping.companyState, company.geo.stateCode);
      this.set(this.mapping.companyCity, company.geo.city);
      this.set(this.mapping.companyFunding, company.metrics.raised);
      this.set(this.mapping.companyEstimatedAnnualRevenue, company.metrics.estimatedAnnualRevenue);
      this.set(this.mapping.companyEmployeesRange, company.metrics.employeesRange);
      this.set(this.mapping.companyEmployees, company.metrics.employees);
      return this.set(this.mapping.companyAlexaRank, company.metrics.alexaGlobalRank);
    };

    Clearbit.prototype.triggerEvent = function() {
      return this.tracker.send(
        'event',
        'Clearbit',
        'Enriched',
        'Clearbit Enriched',
        {nonInteraction: true}
      );
    };

    return Clearbit;

  })();

  providePlugin('Clearbit', Clearbit);

  

  

}).call(this);
