export const scenario_hell_gigglesplat_0_01 = {
	"scenario_id": "hell_gigglesplat_0_01",
	"order": 1,
	"act": "intro",
	"theme": "hell",
	"actors": {
		"ash": {
			"id": "mon_b225f5fa-59a1-47bb-b4c5-e73bf9e7192a",
			"name": {
				"korean": "애쉬",
				"english": "Ash",
				"japanese": "アッシュ",
				"chinese": "艾什",
				"french": "Ash",
				"spanish": "Ash",
				"vietnamese": "Ash",
				"thai": "แอช",
				"hindi": "ऐश"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d84413a8-9d6f-4a40-5d36-75e431fb9900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/78281fca-e4b8-45cc-68ef-7df3fef74200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "끝없는 절규 대신, 기괴한 웃음소리가 울려 퍼지는 지옥의 문이 열렸다.",
						"english": "Instead of endless screams, the gates of hell opened, resounding with bizarre laughter.",
						"japanese": "終わりのない絶叫の代わりに、奇妙な笑い声が響き渡る地獄の門が開いた。",
						"chinese": "取代了无尽的尖叫，地狱之门开启，回荡着诡异的笑声。",
						"french": "Au lieu de cris interminables, les portes de l'enfer s'ouvrirent, résonnant de rires bizarres.",
						"spanish": "En lugar de gritos interminables, las puertas del infierno se abrieron, resonando con risas extrañas.",
						"vietnamese": "Thay vì những tiếng la hét không ngừng, cánh cổng địa ngục mở ra, vang vọng tiếng cười kỳ quái.",
						"thai": "แทนที่จะเป็นเสียงกรีดร้องไม่รู้จบ ประตูแห่งนรกก็เปิดออก ก้องกังวานไปด้วยเสียงหัวเราะที่แปลกประหลาด",
						"hindi": "अंतहीन चीखों की जगह, नर्क के द्वार खुल गए, जिनमें अजीबोगरीब हँसी गूँज रही थी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "여기가 지옥이라고? 웃고 있잖아.",
						"english": "This is hell? But they're laughing.",
						"japanese": "ここが地獄？でもみんな笑ってるよ。",
						"chinese": "这里是地狱？他们都在笑啊。",
						"french": "C'est l'enfer ici ? Mais ils rient.",
						"spanish": "¿Esto es el infierno? Pero se están riendo.",
						"vietnamese": "Đây là địa ngục ư? Nhưng họ đang cười mà.",
						"thai": "นี่คือขุมนรกเหรอ? แต่พวกเขากำลังหัวเราะอยู่",
						"hindi": "यह नर्क है? लेकिन वे हँस रहे हैं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"speaker": "ash",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "여긴… 행복을 강요받는 곳이에요.",
						"english": "This is a place... where happiness is forced upon us.",
						"japanese": "ここは…幸福を強制される場所なんです。",
						"chinese": "这里是…一个被强迫幸福的地方。",
						"french": "C'est un endroit… où le bonheur nous est imposé.",
						"spanish": "Este es un lugar... donde se nos impone la felicidad.",
						"vietnamese": "Đây là nơi... mà hạnh phúc bị ép buộc.",
						"thai": "นี่คือที่ที่... ความสุขถูกบังคับ",
						"hindi": "यह वह जगह है... जहाँ हमें खुशी थोपी जाती है।"
					},
					"speaker": "ash"
				},
				{
					"speaker": "ash",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "저 '웃는 젤리'… 기글스플랫 때문이에요.",
						"english": "It's because of that 'Giggling Jelly'... Gigglesplat.",
						"japanese": "あの「笑うゼリー」…ギグルスプラットのせいなんです。",
						"chinese": "都是因为那个“咯咯笑的果冻”…吉格斯普拉特。",
						"french": "C'est à cause de ce « Gelée Rieur »... Gigglesplat.",
						"spanish": "Es por esa 'Gelatina Sonriente'... Gigglesplat.",
						"vietnamese": "Đó là vì 'Thạch Cười'... Gigglesplat.",
						"thai": "เป็นเพราะ 'เยลลี่หัวเราะ'... กิ๊กเกิลสแพลต",
						"hindi": "यह उस 'हँसती हुई जेली'... गिगल्सप्लेट की वजह से है।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "ash",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "저들이 진짜 행복하다고 생각할 리 없어요.",
						"english": "They can't possibly be genuinely happy.",
						"japanese": "彼らが本当に幸せだなんて思えません。",
						"chinese": "他们不可能真的快乐。",
						"french": "Ils ne peuvent pas être vraiment heureux.",
						"spanish": "No es posible que sean realmente felices.",
						"vietnamese": "Họ không thể thực sự hạnh phúc được.",
						"thai": "พวกเขาไม่มีทางมีความสุขจริง ๆ หรอก",
						"hindi": "वे वास्तव में खुश नहीं हो सकते।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "마을 곳곳에서 꺄르르거리는 웃음소리가 들려온다. 어딘가 부자연스럽다.",
						"english": "Giggling laughter can be heard throughout the village. It's somehow unnatural.",
						"japanese": "村のあちこちから、くすくす笑う声が聞こえてくる。どこか不自然だ。",
						"chinese": "村子里到处都能听到咯咯的笑声。这有点不自然。",
						"french": "Des rires étouffés peuvent être entendus partout dans le village. C'est en quelque sorte contre nature.",
						"spanish": "Se escuchan risas ahogadas por todo el pueblo. Es algo antinatural.",
						"vietnamese": "Tiếng cười khúc khích vang lên khắp làng. Nó có vẻ không tự nhiên chút nào.",
						"thai": "เสียงหัวเราะคิกคักได้ยินไปทั่วหมู่บ้าน มันดูไม่เป็นธรรมชาติเลย",
						"hindi": "गाँव भर में हँसी की खिलखिलाहट सुनाई देती है। यह कहीं न कहीं अप्राकृतिक है।"
					}
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "고통스러워 보이는데, 왜 웃지?",
						"english": "You look pained, why do you smile?",
						"japanese": "苦しそうに見えるのに、なぜ笑う？",
						"chinese": "你看起来很痛苦，为什么还笑？",
						"french": "Tu as l'air de souffrir, pourquoi ris-tu ?",
						"spanish": "Pareces sufrir, ¿por qué sonríes?",
						"vietnamese": "Trông bạn đau đớn vậy, sao lại cười?",
						"thai": "ดูทรมานจัง ทำไมถึงยิ้มล่ะ?",
						"hindi": "तुम दर्द में दिख रहे हो, फिर हंस क्यों रहे हो?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그게 저 젤리의 방식이에요. 슬픔을 먹고… 웃음을 토해내죠.",
						"english": "That's how that jelly works. It devours sorrow... and vomits laughter.",
						"japanese": "それがあのゼリーのやり方です。悲しみを食べて…笑いを吐き出すんです。",
						"chinese": "那就是那种果冻的方式。它吞噬悲伤…然后吐出笑容。",
						"french": "C'est la façon d'agir de cette gelée. Elle dévore la tristesse... et vomit le rire.",
						"spanish": "Así es como funciona esa gelatina. Devora la tristeza... y vomita la risa.",
						"vietnamese": "Đó là cách hoạt động của loại thạch đó. Nó nuốt chửng nỗi buồn... và nôn ra tiếng cười.",
						"thai": "นั่นคือวิธีที่เยลลี่ทำงาน มันกินความเศร้า... แล้วอาเจียนเป็นเสียงหัวเราะ",
						"hindi": "उस जेली का यही तरीका है। वह दुख को खा जाती है... और हंसी उगल देती है।"
					},
					"speaker": "ash"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 400,
					"speaker": "ash",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "점점 더 심해지고 있어요. 이 역한 단내도.",
						"english": "It's getting worse. This sickening sweetness too.",
						"japanese": "どんどんひどくなってる。この吐き気を催す甘い匂いも。",
						"chinese": "越来越严重了。这股恶心的甜味也是。",
						"french": "Ça empire. Cette odeur douceâtre et écœurante aussi.",
						"spanish": "Está empeorando. Y también este dulzor nauseabundo.",
						"vietnamese": "Nó đang tệ hơn. Cả cái mùi ngọt ghê tởm này nữa.",
						"thai": "มันแย่ลงเรื่อยๆ กลิ่นหอมหวานน่าคลื่นไส้นี่ก็ด้วย",
						"hindi": "यह और बुरा होता जा रहा है। यह घिनौनी मिठास भी।"
					},
					"speaker": "ash"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "달콤하지만 역한 향이 코를 찔러온다. 지옥의 역겨운 냄새와는 달랐다.",
						"english": "A sweet, yet sickening scent stung my nose. It was unlike the repulsive stench of hell.",
						"japanese": "甘く、それでいて吐き気を催す香りが鼻を突く。地獄の嫌悪感を抱く匂いとは違った。",
						"chinese": "一股甜腻却又令人作呕的气味扑鼻而来。它不同于地狱里那种令人厌恶的恶臭。",
						"french": "Un parfum doux mais écœurant me piquait le nez. Ce n'était pas comme la puanteur répugnante de l'enfer.",
						"spanish": "Un olor dulce, pero nauseabundo, me picaba la nariz. Era diferente al hedor repugnante del infierno.",
						"vietnamese": "Một mùi hương ngọt ngào, nhưng ghê tởm, xộc thẳng vào mũi tôi. Nó không giống mùi hôi thối kinh tởm của địa ngục.",
						"thai": "กลิ่นหอมหวานแต่ชวนคลื่นไส้แทงจมูก มันไม่เหมือนกลิ่นเหม็นน่ารังเกียจของนรก",
						"hindi": "एक मीठी, फिर भी घिनौनी गंध नाक में चुभ रही थी। यह नरक की घृणित बदबू से अलग थी।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "역겹게 달콤한 냄새… 이 젤리 때문인가?",
						"english": "A sickeningly sweet smell... Is it because of this jelly?",
						"japanese": "吐き気を催すほど甘い匂い…このゼリーのせいか？",
						"chinese": "恶心人的甜味…是因为这种果冻吗？",
						"french": "Une odeur écœurante de douceur... Est-ce à cause de cette gelée ?",
						"spanish": "Un olor empalagosamente dulce... ¿Es por esta gelatina?",
						"vietnamese": "Mùi ngọt ngào đến ghê tởm... Có phải do cục thạch này không?",
						"thai": "กลิ่นหอมหวานจนน่าคลื่นไส้... เป็นเพราะเยลลี่นี่หรือเปล่า?",
						"hindi": "एक घिनौनी मीठी गंध... क्या यह इस जेली की वजह से है?"
					}
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "저 '행복'은 전부 가짜예요. 곧 자기 자신도 잊을 만큼.",
						"english": "All that 'happiness' is fake. Enough to soon forget even yourself.",
						"japanese": "あの『幸福』は全部偽物です。すぐに自分自身さえ忘れてしまうほどに。",
						"chinese": "那些'幸福'都是假的。很快就会让你连自己都忘记。",
						"french": "Tout ce 'bonheur' est faux. Assez pour bientôt s'oublier soi-même.",
						"spanish": "Toda esa 'felicidad' es falsa. Lo suficiente para que pronto te olvides de ti mismo.",
						"vietnamese": "Tất cả 'hạnh phúc' đó đều là giả dối. Đến mức sớm quên cả bản thân mình.",
						"thai": "'ความสุข' ทั้งหมดนั้นเป็นของปลอม มากพอที่จะทำให้ลืมแม้กระทั่งตัวเอง",
						"hindi": "वह सारी 'खुशी' नकली है। इतनी कि जल्द ही तुम खुद को भी भूल जाओगे।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…멈춰야 해.",
						"english": "...It has to stop.",
						"japanese": "…止めなければ。",
						"chinese": "...必须阻止它。",
						"french": "...Il faut que ça s'arrête.",
						"spanish": "...Hay que detenerlo.",
						"vietnamese": "...Phải dừng lại thôi.",
						"thai": "...ต้องหยุดมัน",
						"hindi": "...इसे रोकना होगा।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						4
					],
					"action": "enter",
					"speaker": "ash",
					"duration_ms": 400
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이제 돌아갈 수 없을지도 몰라요.",
						"english": "We might not be able to go back now.",
						"japanese": "もう戻れないかもしれません。",
						"chinese": "我们可能回不去了。",
						"french": "On ne pourra peut-être plus revenir en arrière.",
						"spanish": "Puede que ya no podamos volver.",
						"vietnamese": "Có lẽ chúng ta không thể quay lại được nữa.",
						"thai": "เราอาจจะกลับไปไม่ได้แล้ว",
						"hindi": "शायद अब हम वापस नहीं जा सकते।"
					},
					"speaker": "ash"
				},
				{
					"speaker": "ash",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이 '행복'에 잠식당하기 전에…!",
						"english": "Before we're devoured by this 'happiness'...!",
						"japanese": "この『幸福』に侵食される前に…！",
						"chinese": "在被这种'幸福'吞噬之前…！",
						"french": "Avant d'être dévorés par ce 'bonheur'... !",
						"spanish": "¡Antes de ser devorados por esta 'felicidad'...!",
						"vietnamese": "Trước khi bị 'hạnh phúc' này nuốt chửng...!",
						"thai": "ก่อนที่เราจะถูก 'ความสุข' นี้กลืนกิน...!",
						"hindi": "इस 'खुशी' से पहले कि यह हमें निगल जाए...!"
					}
				},
				{
					"speaker": "character_3",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이게 진짜 지옥이구나. 도망칠 곳은 없어.",
						"english": "This is true hell. There's no escape.",
						"japanese": "これが本当の地獄だ。逃げ場はない。",
						"chinese": "这才是真正的地狱。无处可逃。",
						"french": "C'est ça le véritable enfer. Il n'y a pas d'échappatoire.",
						"spanish": "Esto es el verdadero infierno. No hay escapatoria.",
						"vietnamese": "Đây mới là địa ngục thực sự. Không có lối thoát.",
						"thai": "นี่แหละคือนรกที่แท้จริง ไม่มีทางหนีได้",
						"hindi": "यही असली नर्क है। कोई बचकर नहीं निकल सकता।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그래도… 끝을 봐야 해.",
						"english": "Still... I have to see it through.",
						"japanese": "それでも…終わりを見届けなければ。",
						"chinese": "即使如此……也必须看到结局。",
						"french": "Quand même... je dois voir la fin.",
						"spanish": "Aun así… debo ver el final.",
						"vietnamese": "Dù vậy… vẫn phải xem đến cùng.",
						"thai": "ถึงอย่างนั้น... ก็ต้องไปให้สุด.",
						"hindi": "फिर भी... मुझे अंत तक देखना होगा।"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "크하하! 겨우 그 정도로 날 이기겠다고? 영원히 행복할 시간이다!",
						"english": "Hahaha! You think you can beat me with that? Time for eternal bliss!",
						"japanese": "クハハ！そんな程度で俺に勝てると思ってんのか？永遠に幸せな時間だ！",
						"chinese": "哈哈哈！就凭这点本事也想赢我？永恒的幸福时间到了！",
						"french": "Hahaha ! Tu penses me vaincre avec si peu ? C'est le temps du bonheur éternel !",
						"spanish": "¡Jajajaja! ¿Crees que me vas a ganar con eso? ¡Es la hora de la felicidad eterna!",
						"vietnamese": "Khà khà! Ngươi nghĩ chỉ bấy nhiêu đó có thể thắng ta sao? Thời khắc hạnh phúc vĩnh cửu đã đến!",
						"thai": "ฮ่าๆๆ! แค่นั้นจะเอาชนะข้าได้งั้นรึ? ได้เวลาแห่งความสุขชั่วนิรันดร์แล้ว!",
						"hindi": "हाहाहा! बस इतनी सी बात से मुझे हराओगे? यह शाश्वत खुशी का समय है!"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…젠장. 아직도 이 역겨운 웃음이 가득해.",
						"english": "...Damn it. That disgusting laugh still echoes.",
						"japanese": "…くそ。まだあの忌々しい笑い声が響いてる。",
						"chinese": "……该死。那令人作呕的笑声还在回荡。",
						"french": "...Mince. Ce rire dégoûtant résonne encore.",
						"spanish": "...Maldita sea. Esa risa asquerosa sigue resonando.",
						"vietnamese": "...Chết tiệt. Cái tiếng cười ghê tởm đó vẫn còn văng vẳng.",
						"thai": "...ให้ตายสิ. เสียงหัวเราะน่ารังเกียจนั่นยังคงก้องอยู่เลย.",
						"hindi": "...धिक्कार है। वह घिनौनी हंसी अभी भी गूंज रही है।"
					}
				},
				{
					"speaker": "ash",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "도망쳐요! 더 깊이 잠식되기 전에…!",
						"english": "Run! Before it consumes you deeper...!",
						"japanese": "逃げて！もっと深く侵食される前に…！",
						"chinese": "快逃！在被更深地吞噬之前……！",
						"french": "Fuyez ! Avant d'être englouti plus profondément... !",
						"spanish": "¡Huye! ¡Antes de que te consuma más profundamente...!",
						"vietnamese": "Chạy đi! Trước khi bị nó xâm chiếm sâu hơn...!",
						"thai": "หนีไป! ก่อนที่มันจะกลืนกินเข้าไปลึกกว่านี้...!",
						"hindi": "भागो! इससे पहले कि यह तुम्हें और गहराई से निगल ले...!"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "ash"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…아니. 여기서 멈출 수 없어.",
						"english": "...No. I can't stop here.",
						"japanese": "…いや。ここで止まるわけにはいかない。",
						"chinese": "……不。我不能就此止步。",
						"french": "...Non. Je ne peux pas m'arrêter ici.",
						"spanish": "...No. No puedo detenerme aquí.",
						"vietnamese": "...Không. Ta không thể dừng lại ở đây.",
						"thai": "...ไม่. ฉันหยุดตรงนี้ไม่ได้.",
						"hindi": "...नहीं। मैं यहां नहीं रुक सकता।"
					},
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "기괴한 웃음소리로 가득 찬 공간. 거대한 그림자가 탐험대를 기다린다.",
						"english": "A space filled with grotesque laughter. A colossal shadow awaits the expedition.",
						"japanese": "奇怪な笑い声に満ちた空間。巨大な影が探検隊を待ち受ける。",
						"chinese": "空间里充斥着怪异的笑声。巨大的黑影等待着探险队。",
						"french": "Un espace rempli de rires grotesques. Une ombre colossale attend l'expédition.",
						"spanish": "Un espacio lleno de risas grotescas. Una sombra colosal espera a la expedición.",
						"vietnamese": "Không gian tràn ngập tiếng cười quái dị. Một cái bóng khổng lồ đang chờ đợi đoàn thám hiểm.",
						"thai": "พื้นที่ที่เต็มไปด้วยเสียงหัวเราะแปลกประหลาด เงายักษ์กำลังรอคอยคณะสำรวจ",
						"hindi": "एक अजीब हंसी से भरी जगह। एक विशाल छाया अभियान का इंतजार कर रही है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "꺄르르! 왜 이리 슬픈 표정이야? 행복해야지!",
						"english": "Kkkk! Why such a sad face? You should be happy!",
						"japanese": "キャハハ！どうしてそんな悲しい顔してるの？幸せにならなきゃ！",
						"chinese": "咯咯！为什么表情这么悲伤？你应该高兴才对！",
						"french": "Hihihi ! Pourquoi ce visage triste ? Tu devrais être heureux !",
						"spanish": "¡Jajaja! ¿Por qué esa cara triste? ¡Deberías ser feliz!",
						"vietnamese": "Khà khà! Sao mặt mày buồn bã thế? Phải vui lên chứ!",
						"thai": "คิกคิก! ทำไมทำหน้าเศร้าอย่างนี้ล่ะ? ควรจะมีความสุขสิ!",
						"hindi": "हाहाहा! इतने उदास क्यों हो? तुम्हें खुश होना चाहिए!"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "누가 너 같은 가짜 행복을 원해!",
						"english": "Who wants fake happiness like yours!",
						"japanese": "誰がお前みたいな偽りの幸せを望むか！",
						"chinese": "谁会想要你这种虚假的幸福！",
						"french": "Qui voudrait d'un faux bonheur comme le tien !",
						"spanish": "¡Quién quiere una felicidad falsa como la tuya!",
						"vietnamese": "Ai muốn thứ hạnh phúc giả tạo như ngươi!",
						"thai": "ใครจะต้องการความสุขจอมปลอมอย่างแกกัน!",
						"hindi": "तुम्हारी जैसी झूठी खुशी किसे चाहिए!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 것들. 고통은 사라져야 마땅해. 영원히 웃어라!",
						"english": "Fools. Pain deserves to disappear. Laugh forever!",
						"japanese": "愚かな者たちめ。苦痛は消え去るべきだ。永遠に笑え！",
						"chinese": "愚蠢的东西。痛苦理应消失。永远地笑吧！",
						"french": "Imbéciles. La douleur mérite de disparaître. Riez éternellement !",
						"spanish": "Necios. El dolor merece desaparecer. ¡Reíd para siempre!",
						"vietnamese": "Bọn ngu ngốc. Đau khổ đáng lẽ phải biến mất. Hãy cười vĩnh viễn đi!",
						"thai": "พวกโง่เง่า ความเจ็บปวดสมควรหายไป หัวเราะตลอดไปเถอะ!",
						"hindi": "मूर्खों। दर्द को गायब हो जाना चाहिए। हमेशा हंसते रहो!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"spot": [
						1,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ash"
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "들으면 안 돼요! 저 웃음은 너희를 잠식할 거예요!",
						"english": "Don't listen! That laughter will consume you!",
						"japanese": "聞いてはいけません！あの笑い声はあなたたちを蝕むでしょう！",
						"chinese": "别听！那种笑声会吞噬你们的！",
						"french": "N'écoutez pas ! Ce rire vous consumera !",
						"spanish": "¡No escuchéis! ¡Esa risa os consumirá!",
						"vietnamese": "Đừng nghe! Tiếng cười đó sẽ nuốt chửng các ngươi!",
						"thai": "อย่าฟัง! เสียงหัวเราะนั้นจะกลืนกินพวกคุณ!",
						"hindi": "मत सुनो! वह हंसी तुम्हें निगल जाएगी!"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "ash",
					"duration_ms": 400,
					"type": "direction",
					"action": "exit",
					"direction": "down"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "하…하… 영원한… 행복은… 누구에게나… 꺄르르…",
						"english": "Ha... ha... eternal... happiness... for everyone... Kkkk...",
						"japanese": "ハ…ハ…永遠の…幸せは…誰にでも…キャハハ…",
						"chinese": "哈……哈……永恒的……幸福……对每个人……咯咯……",
						"french": "Ha... ha... le bonheur... éternel... pour tous... Hihihi...",
						"spanish": "Ja... ja... la... felicidad... eterna... para todos... ¡Jajaja...",
						"vietnamese": "Ha… ha… hạnh phúc… vĩnh cửu… cho tất cả… Khà khà…",
						"thai": "ฮา... ฮา... ความสุข... นิรันดร์... สำหรับทุกคน... คิกคิก...",
						"hindi": "हा... हा... शाश्वत... खुशी... सबके लिए... हाहाहा..."
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "끝났어. 하지만… 이 웃음은 여전해.",
						"english": "It's over. But... this laughter remains.",
						"japanese": "終わった。しかし…この笑い声はまだ残っている。",
						"chinese": "结束了。但是……这笑声还在。",
						"french": "C'est fini. Mais... ce rire persiste.",
						"spanish": "Se acabó. Pero... esta risa aún permanece.",
						"vietnamese": "Kết thúc rồi. Nhưng… tiếng cười này vẫn còn.",
						"thai": "จบแล้ว แต่ว่า... เสียงหัวเราะนี้ยังคงอยู่",
						"hindi": "खत्म हो गया। लेकिन... यह हंसी अभी भी है।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "잠시 잦아들었던 웃음은, 또 다른 고통과 함께 다시 피어났다.",
						"english": "The laughter, which had subsided for a moment, bloomed again with another pain.",
						"japanese": "一時収まっていた笑い声は、また別の苦痛とともに再び咲き誇った。",
						"chinese": "暂时平息的笑声，又伴随着另一种痛苦再次绽放。",
						"french": "Le rire, qui s'était tu un instant, refleurit avec une autre douleur.",
						"spanish": "La risa, que se había calmado por un momento, volvió a florecer con otro dolor.",
						"vietnamese": "Tiếng cười tưởng chừng đã lắng xuống, lại nở rộ cùng với nỗi đau khác.",
						"thai": "เสียงหัวเราะที่เงียบไปชั่วขณะ กลับผลิบานขึ้นมาอีกครั้งพร้อมกับความเจ็บปวดอื่น",
						"hindi": "जो हंसी कुछ देर के लिए थम गई थी, वह एक और दर्द के साथ फिर से खिल उठी।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "진정한 행복은 무엇이며, 이 지옥의 근원은 어디인가.",
						"english": "What is true happiness, and where is the source of this hell?",
						"japanese": "真の幸福とは何なのか、そしてこの地獄の根源はどこにあるのか。",
						"chinese": "真正的幸福是什么，这地狱的根源又在哪里。",
						"french": "Qu'est-ce que le vrai bonheur, et où se trouve la source de cet enfer ?",
						"spanish": "¿Qué es la verdadera felicidad y dónde está la fuente de este infierno?",
						"vietnamese": "Hạnh phúc đích thực là gì, và nguồn gốc của địa ngục này ở đâu.",
						"thai": "ความสุขที่แท้จริงคืออะไร และต้นกำเนิดของนรกนี้อยู่ที่ใด",
						"hindi": "सच्ची खुशी क्या है, और इस नर्क का स्रोत कहां है?"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"절규 대신 웃음이 가득한 지옥의 문이 열렸다.",
			"모두가 '행복해!'라고 외친다. 고통 속에서도.",
			"이 기괴한 광경, '웃는 젤리' 기글스플랫의 짓이다.",
			"알 수 없는 부조리한 불안감이 숲을 덮쳤다."
		],
		"english": [
			"The gates of hell opened, filled with laughter instead of screams.",
			"Everyone shouts 'I'm happy!' even in pain.",
			"This bizarre sight is the work of 'Giggling Jelly' Gigglesplat.",
			"An unknown, absurd unease covered the forest."
		],
		"japanese": [
			"絶叫の代わりに笑い声に満ちた地獄の門が開いた。",
			"誰もが苦痛の中でも「幸せだ！」と叫ぶ。",
			"この奇妙な光景は、「笑うゼリー」ギグルスプラットの仕業だ。",
			"未知の不条理な不安感が森を覆った。"
		],
		"chinese": [
			"地狱之门开启，里面充满了笑声而非尖叫。",
			"即使在痛苦中，每个人都喊着“我好幸福！”",
			"这诡异的景象，是“咯咯笑的果冻”吉格斯普拉特搞的鬼。",
			"一种莫名的、荒谬的不安感笼罩了森林。"
		],
		"french": [
			"Les portes de l'enfer s'ouvrirent, remplies de rires au lieu de cris.",
			"Tout le monde crie « Je suis heureux ! » même dans la douleur.",
			"Cette scène bizarre est l'œuvre de « Gigglesplat le Gelée Rieur ».",
			"Une anxiété absurde et inconnue recouvrit la forêt."
		],
		"spanish": [
			"Las puertas del infierno se abrieron, llenas de risas en lugar de gritos.",
			"Todos gritan '¡Soy feliz!' incluso en el dolor.",
			"Esta extraña escena es obra de 'Gigglesplat, la Gelatina Sonriente'.",
			"Una inquietud absurda y desconocida cubrió el bosque."
		],
		"vietnamese": [
			"Cánh cổng địa ngục mở ra, tràn ngập tiếng cười thay vì tiếng la hét.",
			"Mọi người đều reo lên 'Tôi hạnh phúc!' ngay cả trong đau khổ.",
			"Cảnh tượng kỳ quái này là do 'Thạch Cười' Gigglesplat gây ra.",
			"Một cảm giác bất an vô lý, không rõ nguyên nhân bao trùm khu rừng."
		],
		"thai": [
			"ประตูแห่งนรกเปิดออก เต็มไปด้วยเสียงหัวเราะแทนที่จะเป็นเสียงกรีดร้อง",
			"ทุกคนต่างตะโกนว่า 'ฉันมีความสุข!' แม้จะอยู่ในความเจ็บปวด",
			"ภาพแปลกประหลาดนี้เป็นฝีมือของ 'เยลลี่หัวเราะ' กิ๊กเกิลสแพลต",
			"ความไม่สบายใจที่ไร้เหตุผลและไม่รู้จักปกคลุมป่า"
		],
		"hindi": [
			"नर्क के द्वार खुल गए, चीखों की जगह हँसी से भरे हुए।",
			"हर कोई दर्द में भी 'मैं खुश हूँ!' चिल्लाता है।",
			"यह विचित्र दृश्य 'हँसती हुई जेली' गिगल्सप्लेट का काम है।",
			"एक अज्ञात, बेतुकी बेचैनी ने जंगल को ढक लिया।"
		]
	}
} as const;
