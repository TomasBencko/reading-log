
import StarRating from '../components/bookPage/StarRating'
import PrioritySetting from '../components/bookPage/PrioritySetting'
import ButtonBase from '../components/common/ButtonBase'
import InputField from '../components/common/InputField'
import BookThumbnail from '../components/bookPage/BookThumbnail'
import InfoCapsule from '../components/common/InfoCapsule'
import BookTags from '../components/bookPage/BookTags'

import { faMagnifyingGlass, faFloppyDisk } from '@fortawesome/free-solid-svg-icons'

import './BookEditPage.scss'

export default function BookEditPage() {

  return (
    <section id="BookEditPage">
      <h1>Add book</h1>
      
      <ButtonBase icon={faMagnifyingGlass} label='Search book online' />

      <div className='CapsuleWrapper'>

        <InputField label="Title" />
        <InputField label="Authors (comma separated)" />

        <div className="thumbnail-section">
          <BookThumbnail thumbnail={''} />
          {/*  TODO  Textfield */}
          <InputField label="Thumbnail URL" />
        </div>

        <InputField label="Year published" width={1/2} type='number' />
        <InputField label="Date added" width={1/2} />

        <InputField label="Page count" width={1/3} type='number' />
        <InputField label="Starts on p." width={1/3} type='number' />
        <InputField label="Ends on p." width={1/3} type='number' />

        <InputField label="Average rating" width={1/2} type='number' />
        <InputField label="Number of ratings" width={1/2} type='number' />

        <InfoCapsule width={1/2}
          content={<PrioritySetting priority={0} isFinished={false} />}
        />
        <InfoCapsule width={1/2}
          content={<StarRating rating={0} />}
        />

        <InfoCapsule caption='Click to add a quick note' width={1} />
        
        <div className="thumbnail-section">
          <BookTags tagList={[]} editable={true} />
        </div>

      </div>

      <ButtonBase icon={faFloppyDisk} label='Save the book' />

    </section>
  )
}
