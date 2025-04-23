// lib/queries.js
import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  query GetAllCollections {
    collections {
      items {
        id
        name
        slug
        description
        parent {
            id
            name
        }
        children {
            id
            name
        }
      }
    }
  }
`;

export const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      items {
        id
        name
        slug
        description
        featuredAsset {
          preview
        }
        variants {
          price
        }
        customFields {
          resourceCategory
          resourceDescription1
          domain
          sector
          region
          resourceVersion
          resourceCode
          resourceDescription2
          overview
          timeBenefit
          costBenefit
          qualityBenefit
          steps
          relatedResources
          serviceInput
          serviceThroughput
          serviceOutput
          estimatedCompletionTime
        }
      }
    }
  }
`;

export const GET_PRODUCT = gql`
  query GetProduct($slug: String!) {
    product(slug: $slug) {
      id
      name
      slug
      description
      featuredAsset {
        preview
      }
      variants {
        price
      }
      customFields {
        resourceCategory
        resourceDescription1
        domain
        sector
        region
        resourceVersion
        resourceCode
        resourceDescription2
        overview
        timeBenefit
        costBenefit
        qualityBenefit
        steps
        relatedResources
        serviceInput
        serviceThroughput
        serviceOutput
        estimatedCompletionTime
      }
    }
  }`;
